const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 6996;

const app = express();

app.use(express.json());

app.post('/captcha', async(req, res) => {
  const {token} = req.body;

  await fetch.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LfitIUjAAAAAJkdXsrrXV_FaAO3s3UBMnq9k-jO}&response=${token}`
  )

  if (res.status(200)) {
    res.send('Test passed')
  } else {
    res.send('test failed')
  }
})

app.listen(port, () => {
  console.log(`the server is running on: http://127.0.0.1:${port}`)
});