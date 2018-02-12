'use strict';

var mongoModal = require('../models/contentUploadModel');
var msModal =require('../models/contentUploadMSModel')
exports.getContents = function(req, res) {
  /* content.find({}, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  }); */
 // mongoModal.getAllContent(req, res);
 msModal.getAllContent(req, res);
};

exports.createContentDetail = function(req, res) {
  console.log("Inside");
  /* content.find({}, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  }); */
 // mongoModal.getAllContent(req, res);
 msModal.createContentDetail(req, res);
};

exports.getContentDetail = function(req, res) {
  /* content.find({}, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  }); */
 // mongoModal.getAllContent(req, res);
 msModal.getContentDetail(req, res);
};



exports.createContent = function(req, res) {
  console.log(req.body);
 msModal.createContent(req,res);
};

exports.getContentPublishId = function(req, res) {
  let clientId = req.params.clientId;
 // msModal.getNewPublishId(clientId, res);
};
/*

exports.read_a_content = function(req, res) {
  content.findById(req.params.contentId, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  });
};


exports.update_a_content = function(req, res) {
  content.findOneAndUpdate({_id: req.params.contentId}, req.body, {new: true}, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  });
};


exports.delete_a_content = function(req, res) {


  content.remove({
    _id: req.params.contentId
  }, function(err, content) {
    if (err)
      res.send(err);
    res.json({ message: 'content successfully deleted' });
  });
};*/