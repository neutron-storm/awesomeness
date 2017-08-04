const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/content', bodyParser.text(), (req, res) => {
  res.json({ data: crypto.randomBytes(64).toString('base64') });
});

app.listen(process.env.PORT || 4000, function () {
  console.log(this.address());
});
