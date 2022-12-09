import express from "express";
import bodyParser from "body-parser";
import { db } from "./config.js"
import { getDocs, collection, query, where } from "firebase/firestore";

const link = express.Router();
link.use(bodyParser.json());

link.use(express.urlencoded({
    extended:true
}))

link.post("/api/links", (req, res) => {
    // console.log(req.body)
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

  link.get("/api/links", async (req, res) => {
    const uid = req.query.uid
    let links = [];
    try {
        const q = query(collection(db, "links"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docSnap) => {
            let data = docSnap.data();
            let id = docSnap.id;
            links.push({ id, ...data });
        })
        // console.log(links)
        res.send(links)
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
});

  link.patch("/api/links/:id", (req, res) => {
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

  link.delete("/api/links/:id", (req, res) => {
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
  
export default link;