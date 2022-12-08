import express from "express";
import bodyParser from "body-parser";
import {db, auth} from "./config.js"
import { getDocs, collection, query, where } from "firebase/firestore";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from "firebase/auth";

const router = express.Router();
router.use(bodyParser.json());

router.use(express.urlencoded({
    extended:true
}))

router.get("/", (req, res) => {
  res.send("hewlowolrd");
});

router.post("/api/register", async(req, res) => {
  let email = req.body.email
  let password = req.body.password
  try
  {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential)
      res.send(userCredential)
      console.log("berhasil")
    })
  }
  catch(err)
  {
    console.log(err)
    req.send(err)
  }
});

router.post("/api/login", async(req, res) => {
  let email = req.body.email
  let password = req.body.password
  try
  {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential.user.uid)
      res.send(userCredential.user.uid)
    })
  }
  catch(err)
  {
    console.log(err)
    req.send(err)
  }
});

router.post("/api/logout", async (req, res) => {
  try {
      await signOut(auth).then(() => {
          console.log("berhasil log out")
          res.send("berhasil log out")
      })
  }
  catch (err) {
      console.log(err)
      res.send(err)
  }
});

router.post("/api/links", (req, res) => {
    console.log(req.body)
    try {
      var rawlinks = req.body.rawlinks;
      var customlinks = req.body.customlinks;
      var uid = req.body.uid;
      db.collection("links").add({
        rawlinks: rawlinks,
        customlinks: customlinks,
        uid: uid,
      });
      res.send({
        status: true,
        message: "Data berhasil disimpan",
      });
    } catch (error) {
      res.send({
        status: false,
        message: "Data gagal disimpan",
      });
    }
  });

  router.get("/api/links", async (req, res) => {
    const uid = req.query.uid
    let links = [];
    try {
        const q = query(collection(db, "links"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docSnap) => {
            let data = docSnap.data();
            let id = docSnap.id;
            console.log()
            links.push({ id, ...data });
        })
        console.log(links)
        res.send(links)
    }
    catch (error) {
        console.log("udah tapi error")
        console.log(error)
        res.send(error)
    }
})

  router.patch("/api/links/:id", (req, res) => {
    try {
      db.collection("links")
        .doc(req.params.id)
        .update({
          rawlinks: req.body.rawlinks,
          customlinks: req.body.customlinks,
        })
        .then(() => {
          res.send({
            status: true,
            message: "Data berhasil diubah",
          });
        });
    } catch (error) {
      res.send({
        status: false,
        message: "Data gagal diubah",
      });
    }
  });

  router.delete("/api/links/:id", (req, res) => {
    try {
      db.collection("links")
        .doc(req.params.id)
        .delete()
        .then(() => {
          res.send({
            status: true,
            message: "Data berhasil dihapus",
          });
        });
    } catch (error) {
      res.send({
        status: false,
        message: "Data gagal dihapus",
      });
    }
  });
  
  
export default router;