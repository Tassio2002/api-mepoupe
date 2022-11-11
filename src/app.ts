//Chamar middlewares e rotas
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
import { Request, Response } from 'express';
import { router } from "./routes/averageRoute";

export const app = express();

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.get('/media', router)

//pensar em algo para por aqui
app.get('/', function (req: Request, res: Response) {
  res.status(200).send('App source')
})
