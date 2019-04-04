/**
  * file name: models/project.js  
  * auther's name : Tom Tsiliopoulos
  * Student name: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */


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