const express = require('express');
const router = express.Router();
const database = require('./src/database');
const pgp = database.pgp;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;