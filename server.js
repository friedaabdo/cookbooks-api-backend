const express = require('express')
const app = express()

// Add the middleware code needed to accept incoming data and add it to req.body

const logger = require('morgan')
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

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

app.listen(4000, () => console.log('Server running on port 4000!'))
