const express = require('express');
const router = express();

//controller to send the response
const contactinfo = require('../controllers/Contacts');

//middleware for validation of name
const { ensureAdmin } = require('../middleware/Auth');

/*when we will hit the url 'localhost:3000/delhi/987654321' if the method is post 
,it will execute the below written line ,we will first go to the middleware then to the controller*/
router.post('/addContact/:city/:phone', ensureAdmin, contactinfo.addcontact);
module.exports = router;
