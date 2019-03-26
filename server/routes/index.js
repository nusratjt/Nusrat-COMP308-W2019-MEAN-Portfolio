/**
  * file name: index.js  // indexRouter
  * Student name: Nusrat Jahan
  * Student Id: 300967157
  * Date: Feb 16, 2019
  */

 let express = require('express');
 let router = express.Router();
 
 let indexController = require('../controllers/index');
 
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectPage);

/* GET services page. */
router.get('/services', indexController.displayServicePage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);


/* get contact information using POST method. */
router.post('/contact', indexController.displayContactInfoPage);


module.exports = router;
