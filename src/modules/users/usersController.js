import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'
import Users from "../../models/userModel.js";
import { unlinkFile } from "../../utils/unlnkFile.js";
import Roles from "../../models/roleModel.js";

export const createUsers = asyncHandler(async (req, res, next) => {
  const path = req.file.path;
  try {
    const { name, username, email, password, status, roles } = req.body;
    const avatar = req.file.filename;
    const salt = await bcrypt.genSalt(10)

    const userExist = await Users.findOne({email});
    if (userExist) {
      res.status(400);
      throw new Error("Email already Exist");
    }

    const users = await Users.create({
        name,
        username,
        email,
        password : bcrypt.hashSync(password, salt),
        avatar,
        status,
        roles
    });
   
    if(users){
        res.status(201).json({
          message: "Create users seccessfully",
          data: {
              _id: users._id,
              name:users.name,
              username: users.username,
              email: users.email,
              avatar: users.avatar,
              roles: await Roles.findById(users.roles),
              token : ""
          },
        });
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
  } catch (error) {
    unlinkFile(path);
    throw new Error(error.message);
  }
});
