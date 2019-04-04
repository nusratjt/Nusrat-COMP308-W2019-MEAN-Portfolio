/**
  * file name: routes/index.js  // indexRouter
  * auther's name : Tom Tsiliopoulos
  * Student name: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */

 let express = require('express');
 let router = express.Router();
 
 let indexController = require('../controllers/index');
 
/* GET home page. */
//router.get('/', indexController.displayHomePage);

/* GET about page. */
//router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
//router.get('/project', indexController.displayProjectPage);

/* GET services page. */
//router.get('/service', indexController.displayServicePage);

/* GET contact page. */
//router.get('/contact', indexController.displayContactPage);


/* get contact information using POST method. */
//router.post('/contact', indexController.displayContactInfoPage);

/* GET - displays the Login Page */
//router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
