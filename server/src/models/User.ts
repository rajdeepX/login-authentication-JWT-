import mongoose from "mongoose";

const Users = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("Users", Users);
export default UserModel;
