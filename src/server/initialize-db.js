const defaultState = require("./defaultState.js");
const { connectDB } = require("./connect-db");

async function initializeDB() {
  let db = await connectDB();
  console.info("Got DB", db);
  let user = await db.collection("users").findOne({ id: "U1" });
  if (!user) {
    for (let collectionName in defaultState) {
      console.log(collectionName);
      let collection = db.collection(collectionName);
      await collection.insertMany(defaultState[collectionName]);
      console.log("docs inserted");
    }
  }
}

initializeDB();
