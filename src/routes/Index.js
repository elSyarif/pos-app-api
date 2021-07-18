import express from 'express'
import { errorHandler, notFound } from '../middleware/errorMiddleware.js'
const routes = express()

import rolesRoutes from './rolesRoutes.js'
import permissionRoutes from './permissionRoutes.js'

routes.use(rolesRoutes)
routes.use(permissionRoutes)

routes.use(notFound)
routes.use(errorHandler)
// routes.use("*", (req, res, next) => res.status(404).json({ message: "page not found"}))

export default routes