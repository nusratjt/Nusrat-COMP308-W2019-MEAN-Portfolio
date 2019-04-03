let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: Number,
    email: String,
    message: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactSchema);