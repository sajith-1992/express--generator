var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var person = {
        name : "sajith", coments :{
            coment:"this is sajith"
        }
    }
  res.render('test',  {person});
});

module.exports = router;
