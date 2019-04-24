var express = require('express');



var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');

app.use('/', router);



app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});