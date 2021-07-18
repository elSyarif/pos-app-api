import express from 'express'
import multer from 'multer'

import { createUsers } from '../modules/users/usersController.js'
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

userRouter.post('/users', Upload.single('avatar') ,createUsers)

export default userRouter