const express = require('express');
const routes = express.Router();


/*routes.get('/', function(req,res) {
    res.redirect('/about');
});*/

routes.get('/home', function(req,res) {
    res.render('home', {title: 'home'});
});

module.exports = routes; 