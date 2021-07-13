import express from "express"
import * as crud from '../controllers/crud.js'

const router = express.Router()

router.get('/API/back-office/show', crud.findAllUsers())
router.get('/API/back-office/findbyid', crud.findUserById())
router.post('/contact-me', crud.contactSaveForm())
router.post('/API/back-office/deleteuser', crud.deleteUser())
router.post('/API/back-office/updatebyid', crud.updateUser())

export {
    router as crudRouter
}