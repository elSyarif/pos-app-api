import express from 'express'
import { admin, permit, protect } from '../middleware/authMiddleware.js';
import { createOutlet, deleteOulet, getOutlet, updateOutlet } from '../modules/outlet/outletController.js';

const outletRouter = express.Router()

outletRouter.post('/outlet', protect, admin, createOutlet)
outletRouter.get('/outlet', protect, getOutlet)
outletRouter.put('/outlet/:id', protect, admin, updateOutlet)
outletRouter.delete('/outlet/:id', protect, admin, deleteOulet)

export default outletRouter