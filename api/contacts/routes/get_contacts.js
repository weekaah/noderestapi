'use strict';

const express = require('express'),
      mongoose = require('mongoose'),
      Contact = require('../model/Contact'),
      router = express.Router();
      
router.route('/')
  .get((req, res) => {

    Contact.find({}, (err, contacts) => {
      if (err) res.status(404).json(err);
      
      res.json(contacts);
    });
    
  });
  
module.exports = router;