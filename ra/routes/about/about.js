const express = require('express');
const routes = express.Router();

routes.get('/about', function(req,res) {
	res.render('about');
});

module.exports = routes;