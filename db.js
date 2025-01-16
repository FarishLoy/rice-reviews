const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://hdpromo77:nd8rnKHHIBbOqzEG@cluster0.xbejf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'email-subscriptions';

const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

module.exports = { client, dbName };