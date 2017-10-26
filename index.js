const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));
app.get('/status', function(req, res){
  res.send('hello world');
});
app.listen(3001, () => {
  console.log('Server started at 3001');
});
