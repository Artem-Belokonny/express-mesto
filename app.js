const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Artem!');
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
