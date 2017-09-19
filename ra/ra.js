const express = require('express');
const homeRoutes = require('./routes/home/home.js');
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

app.use('/', homeRoutes);

app.post('/reg', function(req,res) {
    console.log(req.body);
    res.redirect('/welcome');
});

app.get('/about', function(req,res) {
    res.render('about');
});

app.listen(app.get('port'), function() {
    console.log('Server Up');
});