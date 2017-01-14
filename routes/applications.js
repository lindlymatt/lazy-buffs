'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.post('/drivers', (req, res, next) => {
  const driver = {
    name: req.body.name,
    address: req.body.address,
    contact: req.body.contact
  };

  // makes sure nothing is undefined
  const noUndefinedAttribute = Object.keys(driver).every(attribute => typeof attribute.trim() === 'string');

  if (noUndefinedAttribute) {
    knex('drivers')
      .insert(driver, ['name', 'address', 'contact'])
      .then((driver) => {
        res.json(driver[0]);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }
});

router.post('/partners', (req, res, next) => {
  const partner = {
    name: req.body.name,
    address: req.body.address,
    contact: req.body.contact
  };

  // makes sure nothing is undefined
  const noUndefinedAttribute = Object.keys(partner).every(attribute => typeof attribute.trim() === 'string');

  if (noUndefinedAttribute) {
    knex('partners')
      .insert(partner, ['name', 'address', 'contact'])
      .then((partner) => {
        res.json(partner[0]);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }
});

module.exports = router;