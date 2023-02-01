const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get('/teacher', (req, res) => {
  res.end('Hello students!');
});

app.get('/student', (req, res) => {
  res.end('Hello teacher!');
});

app.get('/pranay', (req, res) => {
  res.end('Hello teacher!');
});

app.get("/list_students", (req, res) => {
  fs.readFile(__dirname + '/' + 'students.json', (err, data) => {
      res.end(data);
  });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });