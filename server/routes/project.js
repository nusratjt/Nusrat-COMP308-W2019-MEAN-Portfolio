let express = require('express');
let router = express.Router();

let projectController = require('../controllers/project');

/* GET Contact List page - READ Operation */
router.get('/', projectController.displayProjectList);


/* GET Route for the Add page 
   this will display the Add page */
   router.get('/add', projectController.displayAddPage);

   /* POST Route for processing the Add page */
   router.post('/add', projectController.processAddPage);
   
   /* GET request - display the Edit page */
   router.get('/edit/:id', projectController.displayEditPage);
   
   /* POST request - Update the database with data from the Edit Page */
   router.post('/edit/:id', projectController.processEditPage);
   
   /* GET request to perform the delete action */
   router.get('/delete/:id', projectController.performDelete);










module.exports = router;