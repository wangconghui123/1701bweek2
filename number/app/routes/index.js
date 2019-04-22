var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/pai/getOne', function(req, res.next) {
    res.end("请求数据")
})
module.exports = router;