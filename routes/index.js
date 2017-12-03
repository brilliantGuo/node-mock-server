var express = require('express');
var router = express.Router();

function sendResponse(req, res) {
  var data = {
    method: req.method,
    query: JSON.stringify(req.query) !== '{}' ? req.query : undefined,
    params: JSON.stringify(req.params) !== '{}' ? req.params : undefined,
    body: JSON.stringify(req.body) !== '{}' ? req.body : undefined,
    headers: req.headers,
    cookies: req.cookies,
    url: req.originalUrl,
    originAddress: req.connection.remoteAddress,
  }

  res.send(data);
}

// Get
router.get('/', sendResponse);
router.get('/:param', sendResponse);
// Post
router.post('/', sendResponse);
router.post('/:param', sendResponse);
// Put
router.put('/', sendResponse);
router.put('/:param', sendResponse);
// Delete
router.delete('/', sendResponse);
router.delete('/:param', sendResponse);

module.exports = router;
