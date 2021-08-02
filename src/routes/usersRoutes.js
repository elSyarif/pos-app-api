import express from 'express'
import multer from 'multer'
import { admin, permit, protect } from '../middleware/authMiddleware.js';

import { authUser, changePassword, changeStatus, createUsers, getAvatar, getProfile, updateUser } from '../modules/users/usersController.js'
import { EditFileName, ImageFileFilter } from '../utils/upload.js';

const userRouter = express.Router()
const maxSize = 10 * 1024 * 1024; // 10Mb

// multer upload storage
const storage = multer.diskStorage({
    destination: "./public/images/users",
    filename: EditFileName
})

const Upload = multer({
    storage: storage,
    fileFilter: ImageFileFilter,
    limits: {
        fileSize: maxSize
    }
})

userRouter.post('/users', protect, admin, Upload.single('avatar') ,createUsers)
userRouter.post('/users/auth', authUser)
userRouter.get('/users/avatar/:avatar', getAvatar)
userRouter.get('/users/profile',protect,permit, getProfile)
userRouter.post('/users/changePassword',protect, changePassword)
userRouter.put('/users/:id', protect, permit, Upload.single('avatar'), updateUser)
userRouter.put('/users/status/:id', protect, admin, changeStatus)

export default userRouter