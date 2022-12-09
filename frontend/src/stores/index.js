import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import Swal from "sweetalert2";
import router from "/src/router"

const firebaseConfig = {
  apiKey: "AIzaSyCHkFCbUsFso03_CCXRBCCyqA0d3_LnItk",
  authDomain: "vuelogin-6ef3e.firebaseapp.com",
  projectId: "vuelogin-6ef3e",
  storageBucket: "vuelogin-6ef3e.appspot.com",
  messagingSenderId: "645060518477",
  appId: "1:645060518477:web:35fe6a4137d2565137f204"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useApp = defineStore({
  id: "App",
  state: () => ({
    email: '',
    password: '',
    input: {
      user: {},
      links: {},
      editlink: {},
    },
    links: [],
  }),
  actions: {
    async register(email, password) {
      const res = await axios
        .post("http://localhost:3000/api/register", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status) {
            Swal.fire({
              title: "Success!",
              text: `Succesesfully added user ${email}`,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            router.push("/login");
          }
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: `Seems like there is an error while adding ${email} ${error}`,
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      );
    },
    async login(email, password) {
      const res = await axios
        .post("http://localhost:3000/api/login", {
          email: email,
          password: password,
        })
        .then(
          (response) => {
            // console.log(response);
            const accountId = response.data;
            localStorage.setItem("userToken", accountId);
            if (response.status) {
              Swal.fire({
                title: "Success!",
                text: `Succesesfully login ${email}`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
              router.push("/dashboard");
            }
          },
          (error) => {
            Swal.fire({
              title: "Error!",
              text: `Seems like there is an error while login ${email} ${error}`,
              icon: "error",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        );
    },

    check() {
      if (localStorage.getItem("userToken") != null) {
        router.push("/home");
      } else {
        return;
      }
    },

    async logout() {
      const res = await axios
        .post("http://localhost:3000/api/logout")
        .then(
          (response) => {
            console.log(response);
            localStorage.removeItem("userToken");
            if (response.status) {
              Swal.fire({
                title: "Success!",
                text: `Succesesfully Log out`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
              router.push("/login");
            }
          },
          (error) => {
            Swal.fire({
              title: "Error!",
              text: `Seems like there is an error while Log out`,
              icon: "error",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        );
    },

    async addLinks(links) {
      if (!links.customlinks && !links.rawlinks) {
        return;
      }
      await axios
        .post("http://127.0.0.1:3000/api/links", {
          rawlinks: links.rawlinks,
          customlinks: links.customlinks,
          uid: localStorage.getItem('userToken')
        })
        .then(
          (response) => {
            if (response.status) {
              Swal.fire({
                title: "Success!",
                text: `Succesesfully added link ${links.customlinks}`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
              this.getLinks();
            }
          },
          (error) => {
            Swal.fire({
              title: "Error!",
              text: `Seems like there is an error while adding link ${links.rawlinks} ${error}`,
              icon: "error",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        );
      this.input.links.rawlinks = "";
      this.input.links.customlinks = "";
    },

    async getLinks() {
      const res = await axios.get("http://localhost:3000/api/links", {
          params: { uid: localStorage.getItem('userToken')}
      })
      .then((response)=>{
          console.log(response)
          const links = response.data
          this.links = []
          this.links.push(...response.data)
          // console.log("berhasil")
      })
      .catch((err) => {
          // console.log("gagal")
          console.log(err)
      })
  },

    async editLinks(links) {
      await axios.patch("http://127.0.0.1:3000/api/links/" + links.id, links).then(
        (response) => {
          if (response.status) {
            Swal.fire({
              title: "Success!",
              text: `Succesesfully update link ${links.nama}`,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: `Seems like there is an error while updating link ${links.nama} ${error}`,
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      );
    },

    async deleteLinks(linksid) {
      await axios.delete("http://127.0.0.1:3000/api/links/" + linksid).then(
        (response) => {
          this.input.links = {};
          if (response.status) {
            Swal.fire({
              title: "Success!",
              text: `Succesesfully delete link `,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            this.getLinks();
          }
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: `Seems like there is an error while deleting link ${error}`,
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      );
    },
  },
});
