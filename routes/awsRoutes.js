const uuid = require('uuid/v1');
const AWS = require('aws-sdk');
const requireLogin = require('../middlewares/requireAuth');
const keys = require('../config/keys');

// presigned url
const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});
module.exports = app => {};
