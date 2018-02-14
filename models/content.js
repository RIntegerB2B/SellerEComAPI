
var mongoose = require('mongoose');
var contentDetailModal = require('./contentDetail');

const ContentSchema = new mongoose.Schema({
    clientId: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now },
    description: String,
    encryptedKey:String,
    contentDetail: []
  });

  const Content = mongoose.model('Content', ContentSchema);
  module.exports=Content;