const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/cookbooks_db', {useUnifiedTopology: true, useNewUrlParser: true })

mongoose.Promise = Promise

const db = mongoose.connection

db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', 'mongodb://localhost:27017/cookbooks_db'));
db.on('disconnected', () => console.log('mongo disconnected'));


module.exports = mongoose
