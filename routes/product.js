var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

router.get('/',function(req,res){
  res.send('Hello GET Product!')
})

router.post('/',function(req,res){
  res.send('Got a POST Product!')
})

router.put('/products',function(req,res){
  res.send('Got a PUT Product at /products')
})

router.delete('/products',function(req,res){
  res.send('Got a DELETE Product at /products')
})



module.exports = router;
