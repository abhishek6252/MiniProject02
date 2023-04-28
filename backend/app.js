import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from 'cors';

const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter)

//connections
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.dnkgz9k.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection successful & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));
