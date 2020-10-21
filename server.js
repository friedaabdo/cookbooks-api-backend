require("dotenv").config();
const { PORT = 4500, NODE_ENV = "development" } = process.env;

const mongoose = require("./db/connection")

const cors = require("cors");
const corsOptions = require("./configs/cors.js")

const express = require('express')
const app = express()

// Add the middleware code needed to accept incoming data and add it to req.body
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
const logger = require('morgan')
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))




app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'you have hit the default route...attempting to add authors and their books'
    })
})


const cookbookRouter = require('./controllers/cookbookRoutes')
app.use('/api/cookbooks/', cookbookRouter)

const authorRouter = require('./controllers/authorRoutes')
app.use('/api/authors/', authorRouter)

app.listen(PORT, () => console.log('Server running on port 4500!'))
