import express from 'express'
import HelloController from "./controllers/hello-controller.js"
import UserController  from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";

//mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(express.json());
app.use(cors())

HelloController(app)
UserController(app)
TuitsController(app);

app.listen(process.env.PORT || 4001);


//app.listen(4000)