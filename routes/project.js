let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let project = require('../models/project');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) =>{
    project.find((err, projectList) => {
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
});













module.exports = router;