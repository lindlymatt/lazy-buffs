'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.post('/drivers', (req, res, next) => {
  const driver = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email
  };

  // makes sure nothing is undefined
  const noUndefinedAttributes = Object.keys(driver).every(attribute => typeof attribute.trim() === 'string');

  const number = parseInt(req.body.number.replace(/[\D+]/g, ''));
  if (number.toString().length >= 7) {
    driver.number = number;
  }

  if (noUndefinedAttributes && driver.hasOwnProperty('number')) {
    knex('drivers')
      .insert(driver, ['name', 'address', 'number', 'email'])
      .then((driver) => {
        res.json(driver[0]);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(500);
  }
});

router.post('/partners', (req, res, next) => {
  const partner = {
    name: req.body.name,
    company: req.body.company,
    address: req.body.address,
    email: req.body.email
  };

  // makes sure nothing is undefined
  const noUndefinedAttributes = Object.keys(partner).every(attribute => typeof attribute.trim() === 'string');

  const number = parseInt(req.body.number.replace(/[\D+]/g, ''));
  if (number.toString().length >= 7) {
    partner.number = number;
  }

  if (noUndefinedAttributes && partner.hasOwnProperty('number')) {
    knex('partners')
      .insert(partner, ['name', 'company', 'address', 'number', 'email'])
      .then((partner) => {
        res.json(partner[0]);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;