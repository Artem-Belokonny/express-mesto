const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const PORT = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '60095fa87f15333be424b78b',
  };
  next();
});

app.use('/', router);

app.listen(PORT);
