# AWS-MFA
CLI tool for fetching (AWS) [Multi-Factor Auth](https://aws.amazon.com/iam/details/mfa/) credentials

## Install
```sh
npm install -g aws-mfa
touch .aws-mfa
```

Populate `.aws-mfa` file with AWS credentials

```
AWS_ACCESS_KEY_ID=ZZZZZZZZZZ
AWS_SECRET_ACCESS_KEY=xyZxyZxyZxyZxyZxyZ
MFA_ARN=arn:aws:iam::999999999999:mfa/username
```

## Usage
```sh
aws-mfa <6 digit TokenCode>
```

This will output the file `aws_session.json`
