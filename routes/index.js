var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://0.0.0.0:27017')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sajith',name:"hai this sajith" });
});
router.post("/signup",function(req,res){
 var detail= req.body)
 // Connect to database 
client.connect()
.then(() => {(client.db("user").collection('usercol').insertOne(detail))})
.catch(error => console.log('Failed to connect', error))
 

})
module.exports = router;
