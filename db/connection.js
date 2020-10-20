require("dotenv").config()


const {MONGODBURI} = process.env
const mongoose = require('mongoose')
const config =  {useUnifiedTopology: true, useNewUrlParser: true }
const db = mongoose.connection


mongoose.connect(MONGODBURI, config)

mongoose.Promise = Promise


db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', 'mongodb://localhost:27017/cookbooks_db'));
db.on('disconnected', () => console.log('mongo disconnected'));


module.exports = mongoose
