import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'
import Users from "../../models/userModel.js";
import { unlinkFile } from "../../utils/unlnkFile.js";
import Roles from "../../models/roleModel.js";
import generateToken from "../../utils/generateToken.js";

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
              token : generateToken(users._id)
          },
        });
    }else{
        unlinkFile(path);
        res.status(400)
        throw new Error('Invalid user data')
    }
  } catch (error) {
    unlinkFile(path);
    throw new Error(error.message);
  }
});

export const authUser = asyncHandler(async(req, res, next) =>{
    try {
        const { email, password} = req.body

        const user = await Users.findOne({email})

        if(!user.status){
            res.status(401)
            throw new Error('User not activated')
        }

        if(!user){
            res.status(401)
            throw new Error('Invalid email')
        }
        const verifyPass = bcrypt.compareSync(password, user.password)

        if(user && verifyPass){
            res.json({
                _id: user._id,
                name:user.name,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                roles: await Roles.findById(user.roles),
                token : generateToken(user._id)
            })
        }else{
            res.status(401)
            throw new Error('Invalid password')
        }
    } catch (error) {
        throw new Error(error.message);
    }
})