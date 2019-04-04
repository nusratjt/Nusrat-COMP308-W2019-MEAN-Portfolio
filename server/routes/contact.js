/**
  * file name: routes/contact.js  // contactRouter
  * auther's name : Tom Tsiliopoulos
  * Student name: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */


let express = require('express');
let router = express.Router();


let contactController = require('../controllers/contact');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', contactController.processAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id', contactController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', contactController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;