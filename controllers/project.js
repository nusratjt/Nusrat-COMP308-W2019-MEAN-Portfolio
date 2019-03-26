let express = require('express');
let router = express.Router();

// create a reference to the db schema
let projectModel = require('../models/project');

module.exports.displayProjectList = (req, res, next) =>{
    projectModel.find((err, projectList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(projectList);

            res.render('projects/index', {
                title: 'Project List',
                projectList: projectList
            });
            
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('projects/add', {
        title: 'Add New Project'
    });
}

module.exports.processAddPage = (req, res, next) => {

    let newContact = projectModel({
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
            // refresh the project list
            res.redirect('/project-list');
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
            // show the edit view
            res.render('projects/edit', {
                title: 'Edit Project',
                project: projectObject
            });
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
            // refresh the project list
            res.redirect('/project-list');
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
            // refresh the project list
            res.redirect('/project-list');
        }
    });
}
