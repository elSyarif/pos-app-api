import express from 'express'
import { addRolePermission, createRoles, deleteRolePermission, deleteRoles, getRoleById, getRoles } from '../modules/roles/roleController.js'
import { protect, admin, permit} from '../middleware/authMiddleware.js'
const rolesRoutes = express.Router()

rolesRoutes.get('/roles', protect, getRoles)
rolesRoutes.get('/roles/:id', protect, getRoleById)
rolesRoutes.post('/roles', protect, permit, createRoles)
rolesRoutes.delete('/roles/:id', protect, permit, deleteRoles)
rolesRoutes.put('/roles/:id/permission',protect, admin, addRolePermission)
rolesRoutes.delete('/roles/:id/permission/:permission',protect, admin, deleteRolePermission)

export default rolesRoutes