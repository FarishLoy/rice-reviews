const express = require('express');
const { subscribe } = require('./subscription');

const app = express();
app.use(express.json());

app.post('/subscribe', async (req, res) => {
  try {
    const email = req.body.email;
    await subscribe(email);
    res.send({ message: 'Subscribed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error subscribing' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});