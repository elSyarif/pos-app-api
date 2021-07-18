import express from 'express'
import { createPermission, deletePermission, getPermission, updatePermission } from '../modules/permissions/permissionController.js'
import { admin, permit, protect } from '../middleware/authMiddleware.js';

const permissionRoutes = express.Router()

permissionRoutes.get('/permission', protect, getPermission)
permissionRoutes.post('/permission', protect, admin, createPermission)
permissionRoutes.put('/permission/:id',protect,admin, updatePermission)
permissionRoutes.delete('/permission/:id', protect, admin, deletePermission)

export default permissionRoutes