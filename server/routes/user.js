import express from 'express'
import authController from '../controllers/authController.js'
import userController from '../controllers/userController.js'

const authRoute = express.Router()
const userRoute = express.Router()

// auth
authRoute.post('/register', (authController.signUp))
authRoute.post('/login', (authController.signIn))
authRoute.get('/logout', (authController.logout))

//user DB
userRoute.get('/', (userController.getAllUsers))
userRoute.get('/:id', (userController.userInfo))
userRoute.put('/:id', (userController.updateUser))
userRoute.delete('/:id', (userController.deleteUser))

export { authRoute, userRoute }