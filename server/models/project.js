let mongoose = require('mongoose');

// create a model class
let projectSchema = mongoose.Schema({
    courseName: String,
    projectName: String,
    description: String
},
{
    collection: "projects"
});

module.exports = mongoose.model('portfolio', projectSchema);