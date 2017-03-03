'use strict';

const express = require('express'),
      mongoose = require('mongoose'),
      Contact = require('../model/Contact'),
      router = express.Router();
      
router.route('/')
  .post((req, res) => {
    const contact = new Contact(req.body);
    
    contact.save((err, contact) => {
      if (err) res.status(404).json(err);
      
      res.json(contact);
    });
  });
  
module.exports = router;