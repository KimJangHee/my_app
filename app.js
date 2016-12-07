var express = require('express');

var app = express();

app.get('/',function (req,res){
  res.send('하하하....!!!');
});

app.listen(3000, function(){
  console.log('Sever On!');
});
