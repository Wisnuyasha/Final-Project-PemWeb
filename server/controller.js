import express from "express";
import bodyParser from "body-parser";
import {db, auth} from "./config.js"

const router = express.Router();
router.use(bodyParser.json());

router.use(express.urlencoded({
    extended:true
}))

router.get("/", (req, res) => {
  res.send("hewlowolrd");
});

router.post("/links", (req, res) => {
    console.log(req.body)
    try {
      var rawlinks = req.body.rawlinks;
      var customlinks = req.body.customlinks;
      db.collection("links").add({
        rawlinks: rawlinks,
        customlinks: customlinks,
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

  router.post("/users", (req, res) => {
    console.log(req.body)
    try {
      var nama = req.body.nama;
      var email = req.body.email;
  
      db.collection("users").add({
        nama: nama,
        email: email,
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

  router.get("/users", (req, res) => {
    try {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          let users = [];
          let id;
          querySnapshot.forEach((doc) => {
            id = doc.id;
            users.push({ id, ...doc.data() });
          });
          res.send(users);
        });
    } catch (error) {
      res.send(error);
    }
  });

  router.get("/links", (req, res) => {
    try {
      db.collection("links")
        .get()
        .then((querySnapshot) => {
          let link = [];
          let id;
          querySnapshot.forEach((doc) => {
            id = doc.id;
            link.push({ id, ...doc.data() });
          });
          res.send(link);
        });
    } catch (error) {
      res.send(error);
    }
  });

  router.patch("/links/:id", (req, res) => {
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

  router.delete("/links/:id", (req, res) => {
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