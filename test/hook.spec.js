'use strict'

/* global describe, it */

const expect = require('chai').expect
const childProcess = require('child_process')

describe('validate-commit-email', () => {
  it('should exit the process with 1 on invalid email', done => {
    const env = {
      'GIT_AUTHOR_EMAIL': 'john.doe@example.com'
    }
    try {
      childProcess.execSync('node index.js @acme.com$', {env})
    } catch (e) {
      expect(e.status, 'Exit code should be 1').to.equal(1)
      expect(e.stdout.toString(), 'An error messsage should have been produced').to.match(/Email not acceptable: john.doe@example.com/)
      done()
    }
  })
  it('should exit the process with 0 on valid email', () => {
    const env = {
      'GIT_AUTHOR_EMAIL': 'john.doe@example.com'
    }
    childProcess.execSync('node index.js @example.com$', {env})
  })
})
