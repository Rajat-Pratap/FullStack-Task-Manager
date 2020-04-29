const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
let db = null;

async function connectDB() {
  if (db) return db;
  console.log("hello");
  let client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  });
  db = client.db("myorganizer");
  return db;
}

module.exports = { connectDB };
