const { client, dbName } = require('./db');

const collectionName = 'subscribers';

async function subscribe(email) {
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne({ email });
    console.log(`Subscribed: ${email}`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { subscribe };