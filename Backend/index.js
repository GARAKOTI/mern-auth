dotenv.config();
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("conected to Mongo db");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server is working fine on 3000 port");
});

app.use("/Backend/user", userRoutes)
app.use("/Backend/auth", authRoutes)