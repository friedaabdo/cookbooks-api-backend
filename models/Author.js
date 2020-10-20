//Import connection
const mongoose = require('../db/connection')
const Schema = mongoose.Schema


/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/

const authorSchema = new Schema({
    firstName: String,
    lastName: String,
    cookbooks: [
        {ref: 'Cookbook', type: Schema.Types.ObjectId}
    ]
})



//export model named "Author"
const Author = mongoose.model('Author', authorSchema)
module.exports = Author



