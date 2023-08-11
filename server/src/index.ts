import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/User";
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
const PORT = 3000;

app.post("/register", async (req: Request, res: Response) => {
  console.log(req.body.name);
  const data = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const newUser = await data.save();
  res.json(newUser);
});

app.get("/register", async (req: Request, res: Response) => {
  const data = await UserModel.find();
  res.json(data);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`);
  });
});
