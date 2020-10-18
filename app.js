const express = require('express');
const app = express();
const contactinfo = require('./routes/addContact');
const bodyparser = require('body-parser'); //to fetch the data given by the user

//to fetch the data in human readable form
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//to use the route
app.use(contactinfo);

//it will run on localhost:3000
app.listen(3000);
