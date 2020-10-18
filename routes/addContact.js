const express = require('express');
const router = express();
const contactinfo = require('../controllers/Contacts');
const { ensureAdmin } = require('../middleware/Auth');
router.post('/addContact/:city/:phone', ensureAdmin, contactinfo.addcontact);
module.exports = router;
