const express = require('express')
const router = express.Router()
const cookies = require('./cookies')

router.use('/cookies', cookies)

function sendResponse(req, res) {
  const {
    headers,
    connection,
    method,
    params,
    query,
    body,
    cookies,
    originalUrl
  } = req

  let ip = headers['x-forwarded-for'] || connection.remoteAddress
  if (ip.substr(0, 7) == '::ffff:') {
    ip = ip.substr(7)
  } else if (ip === '::1') {
    ip = 'localhost'
  }

  const data = {
    method: method,
    params: params.param || undefined,
    query: JSON.stringify(query) !== '{}' ? query : undefined,
    body: JSON.stringify(body) !== '{}' ? body : undefined,
    headers: headers,
    cookies: cookies,
    originalUrl,
    originAddress: ip
  }

  res.send(data)
  res.end()
}

router.all('/', sendResponse)
router.all('/:param', sendResponse)

module.exports = router
