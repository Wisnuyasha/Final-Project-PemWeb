import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, } from "firebase/firestore";
import Swal from 'sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyCrTEi_2gQOwalsdfohki2eDu9oYisRrRA",
  authDomain: "finalproject-39ef0.firebaseapp.com",
  projectId: "finalproject-39ef0",
  storageBucket: "finalproject-39ef0.appspot.com",
  messagingSenderId: "685269585631",
  appId: "1:685269585631:web:f7b35e21113f6b143c636a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const useApp = defineStore({
  id: "App",
  state: () => ({
    users: [],
    menu: {
      edit_user: {
        show: false,
        data: {},
      }
    },
    input: {
      user: {},
      links: {},
      editlink: {}
    },
    links: [],
  }),
  actions: {
    async addUser(user) {
      await axios.post('http://127.0.0.1:3000/users', {
        nama: user.name,
        email: user.email
      })
      .then((response) => {
        if(response.status) {
          Swal.fire({
            title: 'Success!',
            text: `Succesesfully added user ${user.name}`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: `Seems like there is an error while adding user ${user.name}<br>${error}`,
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      });
      this.input.user.name = '';
      this.input.user.email = '';
    },

    async addLinks(links) {
      if( !links.customlinks&& !links.rawlinks ){
        return
      }
      await axios.post('http://127.0.0.1:3000/links', {
        rawlinks: links.rawlinks,
        customlinks: links.customlinks
      })
      .then((response) => {
        if(response.status) {
          Swal.fire({
            title: 'Success!',
            text: `Succesesfully added link ${links.customlinks}`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: `Seems like there is an error while adding user ${links.rawlinks}<br>${error}`,
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      });
      this.input.links.rawlinks = '';
      this.input.links.customlinks = '';
    },

    async getlinks() {
      onSnapshot(collection(db, "links"), (querySnapshot) => {
        let link = [];
        querySnapshot.forEach((doc) => {
          link.push({ id: doc.id, ...doc.data() });
        });
        this.links = link;
        console.log(this.links)
      },
      error => {
        Swal.fire({
          title: 'Error!',
          text: `Seems like there is an error while connecting to Firestore<br>${error}`,
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      }
      );
    },

    async editLinks(links) {
      await axios.patch('http://127.0.0.1:3000/links/' + links.id, links)
      .then((response) => {
        if(response.status) {
          Swal.fire({
            title: 'Success!',
            text: `Succesesfully update user ${links.nama}`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: `Seems like there is an error while updating user ${links.nama}<br>${error}`,
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      });
    },

    async deleteLinks(linksid) {
      await axios.delete('http://127.0.0.1:3000/links/' + linksid)
      .then((response) => {
        this.input.links = {};
        if(response.status) {
          Swal.fire({
            title: 'Success!',
            text: `Succesesfully delete user `,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: `Seems like there is an error while deleting user <br>${error}`,
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      }
      );
    },

  },
});
