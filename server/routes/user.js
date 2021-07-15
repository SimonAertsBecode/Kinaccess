import express from "express"
import * as crud from '../controllers/crud.js'
import * as dashboard from '../services/render.js'


const router = express.Router()

router.get('/getAll-users', dashboard.homeRoutes())


router.get('/API/back-office/show', crud.findAllUsers())
router.get('/API/back-office/findbyID/:id', crud.findUserById())
router.post('/contact-me', crud.contactSaveForm())
router.delete('/API/back-office/deleteuser/:id', crud.deleteUser())
router.put('/API/back-office/updatebyid/:id', crud.updateUser())

export {
    router as crudRouter
}