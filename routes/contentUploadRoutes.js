'use strict';
module.exports = function(app) {
  var contentUpload = require('../controllers/contentUploadController');

  // todoList Routes
  app.route('/contents')
    .get(contentUpload.getContents)
    .post(contentUpload.createContent);

    app.route('/contents/contentDetail')
    .post(contentUpload.createContentDetail);

    app.route('/contents/contentDetail/:contentId')
    .get(contentUpload.getContentDetail)



  /*app.route('/contents/:contentId')
    .get(contentUpload.read_a_content)
    .put(contentUpload.update_a_content)
    .delete(contentUpload.delete_a_content);*/
};