//import connection
const mongoose = require('../db/connection')
const Schema = mongoose.Schema


/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/

const cookbookSchema = new Schema({
    title: String,
    yearPublished: Number
})


//export model
const Cookbook = mongoose.model('Cookbook',cookbookSchema)
module.exports = Cookbook