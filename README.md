# validate-commit-email

[![Build Status](https://travis-ci.org/ResourcefulHumans/validate-commit-email.svg?branch=master)](https://travis-ci.org/ResourcefulHumans/validate-commit-email)
[![monitored by greenkeeper.io](https://img.shields.io/badge/greenkeeper.io-monitored-brightgreen.svg)](http://greenkeeper.io/) 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![semantic-release](https://img.shields.io/badge/semver-semantic%20release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/validate-commit-email.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/validate-commit-email/)

Validate the email of the current committer in your pre-commit hook.

If you are using [husky](https://www.npmjs.com/package/husky), add this to your `package.json`:

```json
  "scripts": {
    …
    "commitmsg": "validate-commit-email @example.com$"
  }

```

This will enforce all committers to use an email that ends with `@example.com`.
