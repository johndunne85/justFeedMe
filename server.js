const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/just-feed-me'));
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname+
  '/dist/just-feed-me/index.html'));
});
app.listen(process.env.PORT || 8080);
