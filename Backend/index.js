dotenv.config();
import * as  dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("conected to Mongo db");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is working fine on 3000 port");
});
