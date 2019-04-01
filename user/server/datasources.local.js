'use strict';

var path = require('path');

module.exports = {
  storage: {
    // 限定上传文件的类型
    allowedContentTypes: ['application/msword', 'image/jpg',
      'image/png', 'image/jpeg',
      'image/tiff', 'application/pdf','application/x-zip-compressed',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/octet-stream','application/vnd.openxmlformats-officedocument.presentationml.presentation'],

    // 限定上传文件大小为50M
    maxFileSize: 50 * 1024 * 1024,

    // 自定义文件名
    getFilename: function(fileInfo) {
      var fileName = fileInfo.name.replace(/\s+/g, '-').toLowerCase();
      var fileObj = path.parse(fileName);
      // 给文件名加上时间戳
      return  Date.now() + '-' +fileObj.name + fileObj.ext;
    },
  },
};
