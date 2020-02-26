var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send('test router page');
})

router.get("/haeun", function(req, res, next) {
    res.send('새로운 라우터 등장');
})

module.exports = router;