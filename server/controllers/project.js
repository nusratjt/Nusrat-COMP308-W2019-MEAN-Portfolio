/**
  * file name: controllers/project.js  
  * auther's name : Tom Tsiliopoulos
  * Student name: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */

let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');


// create a reference to the db schema
let projectModel = require('../models/project');

module.exports.displayProjectList = (req, res, next) =>{
    projectModel.find((err, projectList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(projectList);

           res.json({success: true, msg: 'Project List Displayed Successfully', projectList: projectList, user: req.user});
            
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}


module.exports.processAddPage = (req, res, next) => {

    let newProject = projectModel({
        "courseName": req.body.courseName,
        "projectName": req.body.projectName,
        "description": req.body.description
    });

    projectModel.create(newProject, (err, projectModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Project'});
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    projectModel.findById(id, (err, projectObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {

            res.json({success: true, msg: 'Successfully Displayed Project to Edit', project: projectObject});
            
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedProject = projectModel({
        "_id": id,
        "courseName": req.body.courseName,
        "projectName": req.body.projectName,
        "description": req.body.description
    });

    projectModel.update({_id: id}, updatedProject, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited Contact', project: updatedProject});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    projectModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted Project'});
        }
    });
}
