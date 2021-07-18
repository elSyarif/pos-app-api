import asyncHandler from "express-async-handler";
import Permission from "../../models/permissionModel.js";

export const createPermission = asyncHandler(async(req, res, next) => {
    const {name, description} = req.body
    const permission = new Permission({
        name : name,
        description : description
    })

    const createPermission = await permission.save()
    res.json({
        message : "create permission success",
        data : createPermission
    })
})

export const getPermission = asyncHandler(async(req, res, next) =>{
    const permission = await Permission.find()

    res.json({
        messages : "get data permission successfuly",
        data : permission
    })
})