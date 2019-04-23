var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) 
{
  res.redirect('/index');
});

router.get('/index', function (req, res)  
{
  burger.all(function(data) 
  {
    var object = { burgers: data };
    res.render('index', object);
  });
 });

 router.post('/index', function (req, res) {
	console.log("working???");
	burger.create('burger_name', [req.body.name], function () {
		res.redirect('/');
	});
});
module.exports = router;