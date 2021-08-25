import express from 'express'
const router = express.Router()
import createCategory from '../controllers/inventory.controller'
import { verifyToken, isSeller } from '../middlewares/index'

router.post('/create-category', [verifyToken, isSeller], createCategory)
export default router
