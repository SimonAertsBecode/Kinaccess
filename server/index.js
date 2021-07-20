import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv';

// Routes for 
import { messageCrudRoute } from './routes/contactForm.js'
import { authRoute } from './routes/userAuth.js'

const app = express();

//set dirname
const __dirname = path.resolve()

dotenv.config({ path: path.join(__dirname, 'config/.env') });

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//config for EJS
app.set('views', './views')
app.set('view engine', 'ejs')

//path url API
app.use('/', messageCrudRoute)
app.use('/user', authRoute)

//Database connection && server 
const CONNECTION_URL =
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.1ysv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() =>
        app.listen(process.env.PORT, () => console.log(`server running on port: ${process.env.PORT}`))
    )
    .catch((error) => console.log(error.message + 'hello'))

