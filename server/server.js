const express = require('express');
const bodyParser = require('body-parser');
const budgetController = require('./controllers/budget_controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use(budgetController);

app.listen(8000, () => {
  console.log(`server running on port 8000`)
});