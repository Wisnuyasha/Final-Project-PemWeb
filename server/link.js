import express from "express";
import bodyParser from "body-parser";
import { db } from "./config.js"
import { query, collection, doc, addDoc, updateDoc, where, getDocs } from "firebase/firestore";

const link = express.Router();
link.use(bodyParser.json());



link.post("/api/links", (req, res) => {
    let click = 0
    // console.log(req.body)
    try {
      var rawlinks = req.body.rawlinks;
      var customlinks = req.body.customlinks;
      var uid = req.body.uid;
      // db.collection(db, "links").add({
      //   rawlinks: rawlinks,
      //   customlinks: customlinks,
      //   uid: uid,
      //   click: 0,
      // });
      const q = addDoc(collection(db,"links"), {
        rawlinks: rawlinks,
        customlinks: customlinks,
        uid: uid,
        click: 0,
      })
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
    let click = 0;
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

link.get("/api/redirectlink", async (req, res) => {
  const url = req.query.url
  const curl = url.replace("http://","")
  let id = ''
  let click = 0
  let rawlinks = ''
  try {
      const q = query(collection(db, "links"), where("customlinks", "==", curl));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async(docSnap) => {
          id = docSnap.id
          if (docSnap == null || docSnap === null) {
              console.log("Cannot find associated link")
              res.send("Cannot find associated link")
          }
          else {
              const docData = docSnap.data()
              click = parseInt(docData.click)
              rawlinks = docData.rawlinks
              res.send(rawlinks)
              console.log(click)
              console.log(rawlinks)
              console.log(id)
              const result =
              await updateDoc(doc(db, "links", id), {
                  click: click + 1
              })
              console.log(result)
              console.log(click)
          }
      });
      // res.send(rawlinks)
  }
  catch (err) {
      console.log(err)
      res.send(err)
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