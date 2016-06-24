# AWS-MFA
CLI tool for fetching (AWS) [Multi-Factor Auth](https://aws.amazon.com/iam/details/mfa/) credentials

## Install
```sh
npm install -g aws-mfa
```

## Usage
```sh
aws-mfa <6 digit TokenCode>
```

This will output the file `aws_session.json`
