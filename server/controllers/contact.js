let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let contactModel = require('../models/contact');

module.exports.displayContactList = (req, res, next) =>{
    contactModel.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Contact List Displayed Successfully', contactList: contactList, user: req.user});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {

    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email,
        "message": req.body.message
    });

    contactModel.create(newContact, (err, contactModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Contact'});
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contactModel.findById(id, (err, contactObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Contact to Edit', contact: contactObject});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = contactModel({
        "_id": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email,
        "message": req.body.message
    });

    contactModel.update({_id: id}, updatedContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited Contact', contact: updatedContact});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted Contact'});
        }
    });
}
