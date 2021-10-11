import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import authMiddleware from './middleware/auth.middleware.js';

// Routes for
import { backOfficeRoutes } from './backOffice/routes/backOfficeRoutes.js';
import { messageCrudRoute } from './routes/contactForm.js';
import { authRoute, userRoute } from './routes/user.js';

const app = express();

//set dirname
const __dirname = path.resolve();

//consfig
dotenv.config({ path: path.join(__dirname, 'config/.env') });
const corsOptions = {
   origin: process.env.CLIENT_URL,
   credentials: true,
   allowedHeaders: ['sessionId', 'Content-Type'],
   exposedHeaders: ['sessionId'],
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   preflightContinue: false,
};

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

//jwt
app.get('*', authMiddleware.checkUser);
app.get('/jwtid', authMiddleware.requireAuth, (_, res) => {
   res.status(200).send(res.locals.user._id);
});

//config for EJS
app.set('views', './backOffice/views');
app.set('view engine', 'ejs');

//path url API
app.use('/', messageCrudRoute);
app.use('/back-office', backOfficeRoutes);
app.use('/user', authRoute);
app.use('/api/user', userRoute);

//Database connection && server
const CONNECTION_URL =
   'mongodb+srv://' +
   process.env.DB_USER_PASS +
   '@cluster0.1ysv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
   .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
   })
   .then(() => app.listen(process.env.PORT, () => console.log(`server running on port: ${process.env.PORT}`)))
   .catch((error) => console.log(error.message + 'hello'));
