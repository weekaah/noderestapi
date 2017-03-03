'use strict';

const express = require('express'),
      mongoose = require('mongoose'),
      Contact = require('../model/Contact'),
      router = express.Router();

router.route('/:id')
  .delete((req, res) => {
    
    Contact.findOneAndRemove({_id: req.params.id}, (err, contact) => {
      if (err) res.status(400).json(err);
      
      if (!contact) res.status(404).json({message: 'Contact not found'});
      
      res.json({message: `Contact ${contact.firstName}(${contact._id}) was deleted`})
    });
    
  });
  
module.exports = router;