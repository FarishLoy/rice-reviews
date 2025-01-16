const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();





const client = new MongoClient('mongodb+srv://hdpromo77:nd8rnKHHIBbOqzEG@cluster0.xbejf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

main();

app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  const newEmail = new Email({ email: email });
  newEmail.save((err, email) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error subscribing to email list' });
    } else {
      res.send({ message: 'Successfully subscribed to email list' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});