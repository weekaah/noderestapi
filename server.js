'use strict';

// grab dependecies 
// ====================================
const express = require('express'),
      app = express(),
      hostname = 'localhost',
      port = 3001;
      bodyParser = require('body-parser'),
      cors = require('cors');
      
// load dummy data 
// ====================================
let contacts = require('./data');

// configure application 
// ====================================
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
      
// getting data from api
// ====================================    
app.get('/api/contacts', (request, response) => {
  if (!contacts) {
    response.status(404).json({message: 'No contact found'});
  }
  response.json(contacts);
});

app.get('/api/contacts/:id', (request, response) => {
  const requestId = request.params.id;
  
  let contact = contacts.filter(contact => contact.id == requestId );
  
  if (!contacts) {
    response.status(404).json({message: 'No contact found'});
  }
  
  response.json(contact[0]);
});

// start server
// ====================================
app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});