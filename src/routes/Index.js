import express from 'express'
import { errorHandler, notFound } from '../middleware/errorMiddleware.js'
const routes = express()


import rolesRoutes from './rolesRoutes.js'
import permissionRoutes from './permissionRoutes.js'
import usersRoutes from './usersRoutes.js'
import productRouter from './productRoutes.js'
import outletRouter from './outletRoutes.js'
import SubscribeRoutes from './subscribeRoutes.js'

routes.use(rolesRoutes)
routes.use(permissionRoutes)
routes.use(usersRoutes)
routes.use(productRouter)
routes.use(outletRouter)

// subsribe
routes.use(SubscribeRoutes)

routes.use(notFound)
routes.use(errorHandler)

export default routes