const express = require('express');
const app = express();
const contactinfo = require('./routes/addContact');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(contactinfo);
app.listen(3000);
