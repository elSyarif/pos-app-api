import asyncHandler from "express-async-handler";
import Users from '../../models/userModel.js'

export const createUser = asyncHandler(async(req, res, next) => {
    try {
        const { name, username, email, password,avatar, status , roles} = req.body

        const userExist = await Users.findOne({
            email : email
        })

        if(userExist){
            res.status(202).json({
                message: 'Email already Exist',
            })
        }

        const users = new Users({
            name,
            username,
            email,
            password,
            avatar,
            status
        })
    } catch (error) {
        throw new Error(error.message)
    }
})