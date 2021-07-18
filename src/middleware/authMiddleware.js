import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Users from '../models/userModel.js'
import Roles from '../models/roleModel.js'

export const protect = asyncHandler(async(req, res, next) =>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await Users.findById(decoded.id).select('-password')
            
            req.user = {
                _id : user._id,
                name : user.name,
                username : user.username,
                avatar: user.avatar,
                roles : await Roles.findById({_id :user.roles}),
                status : user.status
            }
            
            next()
        } catch (error) {
            console.error(error)
            res.status(401).json('Not authorized, token failed')
            throw new Error('Not authorized, token failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
      }
})

 export const admin = asyncHandler(async (req, res, next) => {
    const user = req.user

    if(user.roles.name === 'Admin'){
        next()
    }else{
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
 })

 export const permit = asyncHandler(async(req, res, next) => {
    const permission = req.user.roles.permissions

    for (let i = 0; i < permission.length; i++) {
        switch (req.method) {
            case 'POST':
                if(permission[i].name.toUpperCase() === 'CREATE'){
                    next()
                    return
                }
                break;
            case 'PUT':
            case 'PATCH':
                if(permission[i].name.toUpperCase() === 'UPDATE'){
                    next()
                    return
                }
                break;
            case 'DELETE':
                if(permission[i].name.toUpperCase() === 'DELETE'){
                    next()
                    return
                }
                break;
            case 'GET':
                next()
                return;
        }
    }
    res.status(403)
    throw new Error("You don't have permission")
 })