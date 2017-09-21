const express = require('express');
const routes = express.Router();

routes.get('/index', function(req,res) {
	res.render('about');
});

module.exports = routes;