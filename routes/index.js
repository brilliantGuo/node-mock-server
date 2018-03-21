var express = require('express');
var router = express.Router();

function sendResponse(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  } else if (ip === '::1') {
    ip = 'localhost'
  }

  var data = {
    method: req.method,
    params: req.params.param || undefined,
    query: JSON.stringify(req.query) !== '{}' ? req.query : undefined,
    body: JSON.stringify(req.body) !== '{}' ? req.body : undefined,
    headers: req.headers,
    cookies: req.cookies,
    url: req.originalUrl,
    originAddress: ip,
  }

  res.send(data);
}

router.all('/', sendResponse);
router.all('/:param', sendResponse);

module.exports = router;
