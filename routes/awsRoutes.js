const uuid = require('uuid/v1');
const AWS = require('aws-sdk');
const requireAuth = require('../middlewares/requireAuth');
const keys = require('../config/keys');

// presigned url
const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});
module.exports = app => {
  app.get('/api/awsUpload', requireAuth, (req, res) => {
    const uniqueKey = `${req.user.id}/${uuid()}.jpeg`;

    const bucketObj = {
      Bucket: 'rem-bucket-9818',
      ContentType: 'image/jpeg',
      Key: uniqueKey
    };
    s3.getSignedUrl('putObject', bucketObj, (err, url) =>
      res.send({ uniqueKey, url })
    );
  });
};
