import "reflect-metadata"
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import methodOverride from 'method-override';
require('dotenv').config();

//RUTA
import taskRouter from "./routes/tasksRouter";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use("/api", taskRouter)


export default app;