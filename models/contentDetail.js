
var mongoose = require('mongoose');

const ContentDetailSchema = new mongoose.Schema({
    UserId: { type: Number, default: 0 },
    FirstName: String
  });

  const ContentDetail = mongoose.model('ContentDetail', ContentDetailSchema);
  module.exports=ContentDetail;