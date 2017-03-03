'use strict';

const express = require('express'),
      mongoose = require('mongoose'),
      Contact = require('../model/Contact'),
      router = express.Router();

router.route('/:id')
  .get((req, res) => {
    
    Contact.findOne({_id: req.params.id}, (err, contact) => {
      if (err) res.status(40).json(err);
      
      if (!contact) res.status(404).json({message: 'Contact not found.'});
    
      res.json(contact);
    });
    
  });
  
module.exports = router;