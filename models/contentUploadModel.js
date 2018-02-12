'use strict';
/*var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017';

exports.getContents = function(res){
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var dbase = db.db("sellerECom"); //here
    var col = dbase.collection('find');
    // Insert a single document
      // Get first two documents that match the query
      col.find({a:1}).limit(2).toArray(function(err, docs) {
        assert.equal(null, err);
        assert.equal(2, docs.length);
        res.end(docs);
        db.close();
      });
    });
}
*/

var Content = require('../models/content');

exports.getAllContent = function(req, res) {
  // Retrieve and return all notes from the database.
  Content.find(function(err, contents){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(contents);
      }
  });
};

exports.createContent = function(req, res) {
    // Retrieve and return all notes from the database.
   /* var content = new Content({publishId: 1 , contentData: "Sample"});
    content.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
           // res.send(data);
        }
    }); */

    var newContent = new Content(req.body);
    newContent.save(function(err, contentData) {
      if (err)
        res.send(err);
      res.send(contentData);
    });
  };
