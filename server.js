'use strict';

// grab dependecies 
// ====================================
const express = require('express'),
      app = express(),
      hostname = 'localhost',
      port = 3001,
      bodyParser = require('body-parser'),
      cors = require('cors');
      
// load dummy data 
// ====================================
let contacts = require('./data');

// configure application 
// ====================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
      
// get data
// ====================================    
app.get('/api/contacts', (request, response) => {
  if (!contacts) {
    response.status(404).json({message: 'No contact found'});
  }
  response.json(contacts);
});

app.get('/api/contacts/:id', (request, response) => {
  const requestId = request.params.id;
  
  let contact = contacts.filter(contact => contact.id == requestId);
  
  if (!contacts) {
    response.status(404).json({message: 'No contact found'});
  }
  
  response.json(contact[0]);
});

// add data
// ====================================    
app.post('/api/contacts', (request, response) => {
  const contact = {
    id: contacts.length + 1,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    website: request.body.website
  };
  
  contacts.push(contact);
  
  response.json(contact);
});

// edit data
// ====================================    
app.put('/api/contacts/:id', (request, response) => {
  const requestId = request.params.id;
  
  let contact = contacts.filter(contact => contact.id == requestId)[0];
  
  const index = contacts.indexOf(contact);
  
  const keys = Object.keys(request.body);
  
  keys.forEach(key => {
    contact[key] = request.body[key];
  });
  
  contacts[index] = contact;
  
  response.json(contacts[index]);
});

// delete data
// ====================================    
app.delete('/api/contacts/:id', (request, response) => {
  const requestId = request.params.id;  
  let contact = contacts.filter(contact => contact.id == requestId)[0];
  const index = contacts.indexOf(contact);
  
  contacts.splice(index, 1);
  
  response.json({message: `User ${requestId} deleted`});
});

// start server
// ====================================
app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});