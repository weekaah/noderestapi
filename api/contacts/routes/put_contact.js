'use strict';

const express = require('express'),
      mongoose = require('mongoose'),
      Contact = require('../model/Contact'),
      router = express.Router();

router.route('/:id')
  .put((req, res) => {
    
    Contact.findOneAndUpdate({_id: req.params.id},
      req.body,
      {new: true},
      (err, contact) => {
        if (err) res.status(404).json(err);
        
        res.json(contact);    
      }
    );
    
  });
  
module.exports = router;