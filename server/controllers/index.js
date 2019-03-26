let express = require('express');
let router = express.Router();

/* GET home page. */
module.exports.displayHomePage = (req, res, next) => {
    res.render('home/index', { title: 'Home' });
  }
  
  /* GET about page. */
  module.exports.displayAboutPage = (req, res, next) => {
    res.render('home/about', { title: 'About Me' });
  }
  
  /* GET projects page. */
  module.exports.displayProjectPage = (req, res, next) => {
    res.render('home/project', { title: 'Projects' });
  }
  
  /* GET services page. */
  module.exports.displayServicePage = (req, res, next) => {
    res.render('home/service', { title: 'Services' });
  }
  
  /* GET contact page. */
  module.exports.displayContactPage = (req, res, next) => {
    res.render('contacts/index', { title: 'Contact' });
  }
  
  
  /* get contact information using POST method. */
  module.exports.displayContactInfoPage = (req, res, next) => {
    //console.log(req.body);
  
    /** Holds values that user input */
    let contactInfo = {
      "firstName" : req.body.firstName,
      "lastName": req.body.lastName,
      "contactNumber": req.body.contactNumber,
      "email": req.body.email,
      "message": req.body.message
    };
  
    res.render('contacts/contactinfo', { title: "Contact Information", contactInfo: contactInfo});
    
  }
  
   