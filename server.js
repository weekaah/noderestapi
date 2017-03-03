'use strict';

// load environment variables 
// ====================================
require('dotenv').config();

// grab dependecies 
// ====================================
const express = require('express'),
      app = express(),
      hostname = 'localhost',
      port = 3001,
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      uriUtil = require('mongodb-uri'),
      mongodbUri = process.env.DB_URI,
      mongooseUri = uriUtil.formatMongoose(mongodbUri),
      dbOptions = {};

// configure application 
// ====================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
      
// endpoint api
// ====================================
app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));

// start server
// ====================================
app.listen(port, hostname, () => {
  mongoose.connect(mongooseUri, dbOptions, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server is running at http://${hostname}:${port}`);
  });
});