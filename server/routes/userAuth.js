import express from 'express'
import userAuth from '../controllers/authController.js'

const authRoute = express.Router()

authRoute.post('/register', (userAuth.signUp))

export { authRoute }