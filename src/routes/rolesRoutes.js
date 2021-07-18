import express from 'express'
import { addRolePermission, createRoles, deleteRolePermission, deleteRoles, getRoleById, getRoles } from '../modules/roles/roleController.js'

const rolesRoutes = express.Router()

rolesRoutes.get('/roles', getRoles)
rolesRoutes.get('/roles/:id', getRoleById)
rolesRoutes.post('/roles', createRoles)
rolesRoutes.delete('/roles/:id', deleteRoles)
rolesRoutes.put('/roles/:id/permission', addRolePermission)
rolesRoutes.delete('/roles/:id/permission/:permission', deleteRolePermission)

export default rolesRoutes