const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v1',routes)

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
exports = app;