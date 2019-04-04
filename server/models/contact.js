/**
  * file name: models/contact.js  
  * auther's name : Tom Tsiliopoulos
  * Student name: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */


let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    email: String,
    message: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactSchema);