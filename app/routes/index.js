"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var posts = require('../../testDb.js');

module.exports = function(app) {

	var postRouter = express.Router();
	postRouter.use(bodyParser.json());


	postRouter.route('/')
	.all(function(req,res,next) {
	    res.writeHead(200, { 'Content-Type': 'application/json' })
	    next();
	})

	.get(function(req,res,next){
	    res.end(JSON.stringify(posts));
	})

	.post(function(req, res, next){
	    let post = {
	    	id: posts.length + 1,
	        title: req.body.title,
	        describe: req.body.describe,
	        image: req.body.image,
	        views: 0,
	        date: Date.now()
	    }
	    posts.push(post);
	  	res.end(JSON.stringify(posts));
	})

	.delete(function(req, res, next){
		posts.length = 0;
	    res.end('Posts deleted');
	});


	postRouter.route('/:postId')
	.all(function(req,res,next) {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		next();
	})

	.get(function(req,res,next){
	    res.end( JSON.stringify(posts[req.params.postId - 1]) );
	})

	.put(function(req, res, next){
	  	posts[req.params.postId - 1] = {
	    	id: req.params.postId,
	        title: req.body.title,
	        describe: req.body.describe,
	        image: req.body.image,
	        views: posts[req.params.postId - 1].views,
	        date: Date.now()
	  	}  
	    res.end(JSON.stringify(posts));
	})

	.delete(function(req, res, next){
		posts.splice(req.params.postId - 1, 1);
	    res.end(JSON.stringify(posts));
	});

	app.use('/posts', postRouter);
}