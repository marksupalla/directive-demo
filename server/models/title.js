'use strict';

//var bcrypt = require('bcrypt'),
//    Mongo  = require('mongodb');

function Title(){
}

Object.defineProperty(Title, 'collection', {
  get: function(){return global.mongodb.collection('titles');}
});

Title.create = function(o, cb){
  Title.collection.save(o, cb);
};

Title.all = function(title, cb){
  Title.collection.find().toArray(cb);
};

module.exports = Title;

