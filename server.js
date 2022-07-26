const express = require('express');
const { t9Decode } = require('./algorithm.js');

const app = express();

app.get('/api/:id', (req, res) => {
  if (Number(req.params.id) > 0) {
    res.header("Access-Control-Allow-Origin", "*")
    res.send(t9Decode(req.params.id))
  };
});

app.get('*', (req, res) => res.send(''));

const port = 5005;

app.listen(port, () => console.log(`Server listening on port ${port}`));