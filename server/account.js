import express from "express";
import bodyParser from "body-parser";
import { auth } from "./config.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from "firebase/auth";

const account = express.Router();
account.use(bodyParser.json());

account.use(express.urlencoded({
    extended:true
}))

account.post("/api/register", async(req, res) => {
  let email = req.body.email
  let password = req.body.password
  try
  {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
    //   console.log(userCredential)
      res.send(userCredential)
    })
  }
  catch(err)
  {
    console.log(err)
    res.send(err)
  }
});

account.post("/api/login", async(req, res) => {
  let email = req.body.email
  let password = req.body.password
  try
  {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
    //   console.log(userCredential.user.uid)
      res.send(userCredential.user.uid)
    })
  }
  catch(err)
  {
    console.log(err)
    res.send(err)
  }
});

account.post("/api/logout", async (req, res) => {
  try {
      await signOut(auth).then(() => {
        res.send("logged out")
      })
  }
  catch (err) {
      console.log(err)
      res.send(err)
  }
});
   
export default account;