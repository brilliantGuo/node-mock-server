const express = require('express')
const router = express.Router()

function serializeCookie(name, value, option = {}) {
  const pairs = [`${name}=${encodeURIComponent(value)}`]

  if (option.maxAge) pairs.push(`Max-Age=${option.maxAge}`)
  if (option.domain) pairs.push(`Domain=${option.domain}`)
  if (option.path) pairs.push(`Path=${option.path}`)
  if (option.expires) pairs.push(`Expires=${option.expires.toUTCString()}`)
  if (option.httpOnly) pairs.push('HttpOnly')
  if (option.secure) pairs.push(`Secure=${option.secure}`)

  return pairs.join('; ')
}

router.get('/', (req, res) => {
  res.send(req.cookies)
  res.end()
})

router.get('/:key', (req, res) => {
  const { key } = req.params
  res.send({ [key]: req.cookies[key] || null })
  res.end()
})

router.post('/', (req, res) => {
  const { body, query } = req
  const cookies = Object.keys(body).map(key =>
    serializeCookie(key, body[key], query)
  )

  res.setHeader('Set-Cookie', cookies)
  res.send({ code: 200, msg: 'success' })
  res.end()
})

module.exports = router
