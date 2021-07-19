import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    outlet : {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Outlet"
    },
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
    roles: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Roles"
    },
  },
  {
    timestamps: true,
  });

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compareSync(enteredPassword, this.password)
}

const Users = mongoose.model("Users", userSchema);

export default Users;
