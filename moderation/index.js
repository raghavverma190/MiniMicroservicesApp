const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
  }

  if (type === 'CommentCreated') {
  }

  res.send({});
});

app.listen(4003, () => {
  console.log('Listening on 4003');
});
