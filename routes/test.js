var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var person = {
        name : "sajith", coments :{
            coment:"this is sajith ", admin:false, proname:"this is person.coments.proname"
        }
    }
  res.render('test',  {person});
});

module.exports = router;
