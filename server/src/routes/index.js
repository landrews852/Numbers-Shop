var express = require('express');
var router = express.Router();

router
  .get('/', (req, res) => {
    res.send('Hello World!');
  })
  
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
