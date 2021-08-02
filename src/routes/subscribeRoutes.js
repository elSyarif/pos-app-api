import express from 'express'
import { createSubcriber } from '../modules/subsribe/subscribeController.js'

const SubscribeRoutes = express.Router()

SubscribeRoutes.post('/subscribe', createSubcriber)

export default SubscribeRoutes