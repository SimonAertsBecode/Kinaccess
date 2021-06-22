import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import {} from "dotenv/config";

// Routes for 
import mobilityRouter  from "./routes/mobilityAPI.js";
import proprioceptionRouter from "./routes/proprioAPI.js";

const app = express();

//path url API
app.use("/mobility", mobilityRouter);
app.use("/proprioception", proprioceptionRouter);


// Use json for request
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;


//Database connection && server 
const CONNECTION_URL =
    "mongodb+srv://kinaccess:kinauthpwd@cluster0.1ysv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

