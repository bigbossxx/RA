const express = require('express');

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended: true
 }));

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');


app.set('port', process.env.PORT || 3000);





app.get('/', function(req,res) {
    res.redirect('/about');
});

app.post('/reg', function(req,res) {
    console.log(req.body);
    res.redirect('/welcome');
});

app.get('/home', function(req,res) {
    res.render('home');
});

app.get('/about', function(req,res) {
    res.render('about');
});

app.get('/welcome', function(req,res) {
    res.render('welcome');
});

app.listen(app.get('port'), function() {
    console.log('Server Up');
});