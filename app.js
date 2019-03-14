const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const proxy = require('http-proxy-middleware')
const route = require('./routes')
const config = require('./app.config')
const app = express()

const { static, proxyTable } = config

// Moving the http-proxy-middleware above the body-parser
// https://github.com/chimurai/http-proxy-middleware/issues/40
Object.keys(proxyTable).forEach(url => {
  const option = proxyTable[url]
  app.use(proxy(url, option))
})

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, static.favicon)))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, static.path)))

// use express routes
app.use('/api', route)

const handle404 = (function() {
  return static.spa
    ? (req, res) => {
      res.sendFile(path.join(__dirname, static.path + '/index.html'))
    }
    : (req, res, next) => {
      const err = new Error('Not Found')
      err.status = 404
      next(err)
    }
})()

app.use(handle404)

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send(err)
})

module.exports = app
