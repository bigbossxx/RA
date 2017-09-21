const express = require('express');
const routes = express.Router();

routes.get('/welcome', function(req,res) {
    res.render('welcome');
});

module.exports = routes; 