# tests-3

a [Sails v1](https://sailsjs.com) application demonstrating a simple S3 upload.

### To use

1. Create an IAM user in AWS with permissions to write to S3 (for testing, easiest thing is just "Attach existing policy" and select "AmazonS3FullAccess".

2. Create credentials for that user (click "Security credentials" tab and "Create access key", then copy key and secret).

3. Create an S3 bucket and copy the name down.

4. `AWS_API_KEY=<your api key> AWS_SECRET=<your secret> BUCKET=<your bucket> sails lift`

5. Use Postman or similar to POST to /upload-to-s3 with a param named "file" containing the file to upload.

6. Profit!

As an alternative to using env vars, you can set `sails.config.custom.awsApiKey`, `sails.config.custom.awsSecret` and `sails.config.custom.bucket` in your `config/local.js`.


### Links

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Thu Dec 14 2017 11:03:28 GMT-0600 (CST) using Sails v1.0.0-42 _(internally: [`sails-generate@1.14.4`](https://github.com/balderdashy/sails-generate/tree/v1.14.4/lib/core-generators/new))_.



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

