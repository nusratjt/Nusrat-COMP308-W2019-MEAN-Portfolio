/**
  * file name: controllers/index.js  
  * auther's name : Tom Tsiliopoulos
  * Student name: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");


let jwt = require('jsonwebtoken');
let DB = require('../config/db');


// define the User Model
let userModel = require("../models/user");
let User = userModel.User; // alias




/**

// GET home page. 
module.exports.displayHomePage = (req, res, next) => {
  res.render('home/index', {
     title: 'Home',
     displayName: req.user ? req.user.displayName : ""
     });
};

// GET about page. 
module.exports.displayAboutPage = (req, res, next) => {
  res.render('home/about', { 
    title: 'About Me',
    displayName: req.user ? req.user.displayName : ""
   });
};

//GET projects page. 
module.exports.displayProjectPage = (req, res, next) => {
  res.render('home/project', {
     title: 'Projects',
     displayName: req.user ? req.user.displayName : ""
     });
};

// GET services page. 
module.exports.displayServicePage = (req, res, next) => {
  res.render('home/service', {
     title: 'Services',
     displayName: req.user ? req.user.displayName : ""
     });
};

// GET contact page. 
module.exports.displayContactPage = (req, res, next) => {
  res.render('contacts/index', {
     title: 'Contact',
     displayName: req.user ? req.user.displayName : ""
     });
};


// get contact information using POST method. 
module.exports.displayContactInfoPage = (req, res, next) => {
  //console.log(req.body);

  // Holds values that user input 
  let contactInfo = {
    "firstName" : req.body.firstName,
    "lastName": req.body.lastName,
    "contactNumber": req.body.contactNumber,
    "email": req.body.email,
    "message": req.body.message
  };

  res.render('contacts/contactinfo', { 
    title: "Contact Information", 
    contactInfo: contactInfo,
    displayName: req.user ? req.user.displayName : ""
  });
  
};


module.exports.displayLoginPage = (req, res, next) => {
    // check if user is already logged in
    if (!req.user) {
      res.render("auth/login", {
        title: "Login",
        messages: req.flash("loginMessage"),
        displayName: req.user ? req.user.displayName : ""
      });
    } else {
      return res.redirect("/");
    }
  };


*/

 
  
  
module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', 
  (err, user, info) => {
    // server error?
    if(err) {
      return next(err);
    }
    // is there a user login error?
    if(!user) {
      return res.json({success: false, msg: 'ERROR: Failed to Log In User!'});
    }
    req.logIn(user, (err) => {
      // server error?
      if(err) {
        return next(err);
      }

      const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email
      }

      const authToken = jwt.sign(payload, DB.secret, {
        expiresIn: 604800 // 1 Week
      });


      return res.json({success: true, msg: 'User Logged in Successfully!', user: {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email
      }, token: authToken});


    });
  })(req, res, next);
}

  
  /*
  module.exports.displayRegisterPage = (req, res, next) => {
    if (!req.user) {
      res.render("auth/register", {
        title: "Register",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : ""
      });
    } else {
      return res.redirect("/");
    }
  };

  */
  
 module.exports.processRegisterPage = (req, res, next) => {
  // define a new user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password,
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        console.log("Error: User Already Exists!");
      }
      return res.json({success: false, msg: 'ERROR: Failed to Register User!'});
    } else {
      // if no error exists, then registration is successful

      // redirect the user
      return res.json({success: true, msg: 'User Registered Successfully!'});
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.json({success: true, msg: 'User Successfully Logged out!'});
};
  
   