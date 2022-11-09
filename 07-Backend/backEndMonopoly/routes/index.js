var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ name: 'Express with SQL' });
});

router.get('/health', function(req, res, next) {
  res.send({ status: 'Ok' });
});

module.exports = router;
