var express=require('express');
var app=express.Router();
app.get('/',function(req,res){
    res.send('Running at the root level');
});
app.get('/customer/:id',function(req,res){
    res.send('Customer requested is' + req.params['id']); //1st method of passing the parameters
});
app.get('/employee/:name',function(req,res){
    res.send('Employee requested is ' + req.params.name); //2nd way of passing the parameters
});
app.get('/manager',function(req,res){
    res.send('Manager requested is ' + req.query.name); //3rd way of passing the parameters (?name=Vedhaa)
});
module.exports=app;
