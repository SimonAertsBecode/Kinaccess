import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import expressEjsLayouts from 'express-ejs-layouts'
import {} from 'dotenv/config'

// Routes for 
import { crudRouter } from './routes/user.js'

const app = express();

//set dirname
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

//config for EJS
app.set('views', './views')
app.set('view engine', 'ejs');

//path url API
app.use('/', crudRouter);

//Database connection && server 
const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
    "mongodb+srv://kinaccess:kinauthpwd@cluster0.1ysv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

