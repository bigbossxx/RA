const express = require('express');
const routes = express.Router();


routes.get('/', function(req,res) {
    res.redirect('/about/index');
});

routes.get('/home', function(req,res) {
    res.render('home', {title: 'home'});
});

module.exports = routes; 
