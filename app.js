const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const PORT = 3000;

app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use('/', router);

app.use((req, res, next) => {
  req.user = {
    _id: '60095fa87f15333be424b78b',
  };
  next();
});

app.listen(PORT);
