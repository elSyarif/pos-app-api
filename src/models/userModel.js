import mongoose from "mongoose"
import Roles from "./roleModel.js";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    roles: [Roles],
  },
  { timestamp: true }
);


const Users = mongoose.model("Users", userSchema);

export default Users;
