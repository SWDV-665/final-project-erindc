const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(async function(err) {
  client.db('budgetbuddy')
  if (err) {
    console.error("Failed to connect to database: ", err);
  }
  console.log("Connected to database server");

  const db = client.db('budgetBuddy');
});

module.exports = client;