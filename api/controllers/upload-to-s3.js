module.exports = {


  friendlyName: 'Upload to S3',


  description: 'Upload a file to S3',


  files: ['file'],


  inputs: {

    file: {
      description: 'A file to upload.',
      example: '===',
      required: true
    }
  },


  exits: {

  },


  fn: function (inputs, exits) {

    inputs.file.upload({
      adapter: require('skipper-s3'),
      key: sails.config.custom.awsApiKey,
      secret: sails.config.custom.awsSecret,
      bucket: sails.config.custom.bucket,
      region: sails.config.custom.awsRegions || 'us-east-1',
      headers: { 'x-amz-acl': 'public-read' }
    }, (err, uploadedFiles) => {
      if (err) {
        return exits.error(err);
      }
      exits.success(uploadedFiles);
    });

  }

};
