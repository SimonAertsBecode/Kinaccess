import express from "express"
import messageCrud from '../controllers/contactFormController.js'
import render from "../services/render.js"

const messageCrudRoute = express.Router()

//ejs render
messageCrudRoute.get('/getAll-messages', (render.homeRoutes))
messageCrudRoute.get('/checked-messages', (render.checkedRoutes))
messageCrudRoute.get('/waiting-response', (render.waitingRoutes))

//api routes
messageCrudRoute.get('/API/messages/show', (messageCrud.findAllMessages))
messageCrudRoute.get('/API/messages/show/:id', (messageCrud.findMessageById))
messageCrudRoute.post('/contact-me', (messageCrud.contactSaveForm))
messageCrudRoute.delete('/API/messages/deletemessage/:id', (messageCrud.deleteMessage))
messageCrudRoute.put('/API/messages/updatebyidChecked/:id', (messageCrud.updateMessage))

export { messageCrudRoute }