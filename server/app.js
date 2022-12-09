import express from "express";
import cors from "cors";
import account from "./account.js";
import link from "./link.js";

const app = express();
const port = 3000;

app.use(cors());

app.use("/", account, link);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});