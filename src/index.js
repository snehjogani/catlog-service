import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import './mongo'
import services from './services'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

services(app)

app.get('/', (req, res) => res.send(`Catlog service listening on port ${process.env.PORT}!`))

app.listen(process.env.PORT, () => console.log(`Catlog service listening on port ${process.env.PORT}!`))
