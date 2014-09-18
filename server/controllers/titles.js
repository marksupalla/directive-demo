'use strict';

var Title = require('../models/title');

exports.create = function(req, res){
  Title.create(req.body, function(err, title){
    res.send({title:title});
  });
};

exports.index = function(req, res){
  Title.all(req.body, function(err, titles){
    res.send({titles:titles});
  });
};

