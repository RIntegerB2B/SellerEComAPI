
var mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    publishId: { type: Number, default: 0 },
    contentData: String,
    fileName: String,
    description: String,
    account: String
  });

  const Content = mongoose.model('Content', ContentSchema);
  module.exports=Content;