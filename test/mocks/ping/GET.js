const status = 200

const headers = require('../../cors')

const body = {
  OK: Math.random() < 0.5
}

module.exports = {
  headers,
  status,
  body
}
