var fs = require('fs');
var AWS = require('aws-sdk');
AWS.config.apiVersions = {sts: '2011-06-15'};

if (!process.env.MFA_ARN) {
    require('dotenv').config();
    //console.log('### args:', process.argv[2], process.env.AWS_ACCESS_KEY_ID);
}

var params = {
    DurationSeconds: 129600,
    SerialNumber: process.env.MFA_ARN,
    TokenCode: process.argv[2]
};

var sts = new AWS.STS();

sts.getSessionToken(params, function (err, data) {
    if (err) {
        return console.log(err)
    }
    fs.writeFile('aws_session.json', JSON.stringify(data, null, ' '), function () {
        console.log('>>> Created aws_session.json. Yay!');
    });
});