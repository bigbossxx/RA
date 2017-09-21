const express = require('express');
const app = express();

const homeRoutes = require('./routes/home/home.js');
const aboutRoutes = require('./routes/about/about.js');
const welcomeRoutes = require('./routes/welcome/welcome.js');

const handlebars = require('express-handlebars').create({defaultLayout:'main'});
var express_handlebars_sections = require('express-handlebars-sections');


const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended: true
}));

express_handlebars_sections(handlebars);
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/welcome', welcomeRoutes);

app.post('/reg', function(req,res) {
    console.log(req.body.user.name);
    res.redirect('/welcome');
});


app.listen(app.get('port'), function() {
    console.log('Server Up');
});