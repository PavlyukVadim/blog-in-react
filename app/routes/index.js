'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const posts = require('../../testDb.js');

module.exports = (app) => {

  const postRouter = express.Router();
  postRouter.use(bodyParser.json());

  postRouter.route('/')
  .all((req,res,next) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    next();
  })
  .get((req,res,next) => {
    res.end(JSON.stringify(posts));
  })
  .post((req, res, next) => {
    const post = {
      id: posts.length + 1,
      title: req.body.title,
      describe: req.body.describe,
      image: req.body.image,
      views: 0,
      date: Date.now(),
    };
    posts.push(post);
    res.end(JSON.stringify(posts));
  })
  .delete((req, res, next) => {
    posts.length = 0;
    res.end('Posts deleted');
  });

  postRouter.route('/:postId')
  .all((req,res,next) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
      }
    );
    next();
  })
  .get((req,res,next) => {
    res.end(JSON.stringify(posts[req.params.postId - 1]));
  })
  .put((req, res, next) => {
    posts[req.params.postId - 1] = {
      id: req.params.postId,
      title: req.body.title,
      describe: req.body.describe,
      image: req.body.image,
      views: req.body.views,
      date: req.body.date,
    }; 
    res.end(JSON.stringify(posts));
  })
  .delete((req, res, next) => {
    delete posts[req.params.postId - 1];
    res.end(JSON.stringify(posts));
  });

  app.use('/posts', postRouter);
}
