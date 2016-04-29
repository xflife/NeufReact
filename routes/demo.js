var express = require('express');
var router = express.Router();

/* 正在排版页面 */
router.get('/demo', function (req, res) {
  res.render('demo');
});

module.exports = router;