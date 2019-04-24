var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  burger.all(function (data) {
    var object = { burgers: data };
    res.render('index', object);
  });
});

router.post("/", function(req, res) {
  burger.insertOne(req.body.burger, function(result) {
      console.log(result);
      res.redirect("/");
});
});

module.exports = router;