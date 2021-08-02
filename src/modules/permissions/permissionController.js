import asyncHandler from "express-async-handler";
import Permission from "../../models/permissionModel.js";

export const createPermission = asyncHandler(async(req, res, next) => {
    const {name, method} = req.body
    const permission = new Permission({
        name : name,
        method: method
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

export const updatePermission = asyncHandler(async(req, res, next) =>{
    try {
        const id = req.params.id
        const {name, method} = req.body
        const permission = await Permission.findById(id)

        if(permission){
            permission.name = name || permission.name
            permission.method = method || permission.method

            const update = await permission.save()

            res.json({
                message : "Update permission successfully",
                data: update
            })
        }else{
            throw new Error('Permission not found');
        }
    } catch (error) {
        throw new Error(error.message);
    }
})

export const deletePermission = asyncHandler(async(req, res, next) =>{
    try {
        const id = req.params.id
        
        const permission = await Permission.findById(id)

        if(permission){
            const del = await Permission.deleteOne(id)

            res.json({
                message : "Delete permission successfully",
                data: del
            })
        }else{
            throw new Error('Permission not found');
        }
    } catch (error) {
        throw new Error(error.message);
    }
})