import express from 'express'
import { createPermission, getPermission } from '../modules/permissions/permissionController.js'

const permissionRoutes = express.Router()

permissionRoutes.get('/permission', getPermission)
permissionRoutes.post('/permission', createPermission)

export default permissionRoutes