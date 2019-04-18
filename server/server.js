const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const budgetController = require('./controllers/budget_controller');

const app = express();

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(async function(err) {
  if (err) {
    console.error("Failed to connect to database: ", err);
  }
  console.log("Connected to database server");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use(budgetController);

app.listen(() => {
  console.log(`server running on port 8000`)
});

module.exports = client;