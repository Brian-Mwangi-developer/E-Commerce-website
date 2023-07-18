const express = require("express");
const cors = require("cors");
require ("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const app = express();

app.use(cors());

app.use(express.json()); // Add this middleware to parse JSON data in the request body

app.post('/create-checkout-session', async (req, res) => {
  const lineItems = req.body.lineItems; // Get the lineItems data from the request body

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems, // Use the correct property name here
    mode: 'payment',
    success_url: `http://localhost:5173/success`,
    cancel_url: `http://localhost:5173/cart`,
  });

  res.send({ url: session.url });
});

const port = 8080;

app.listen(port, () => console.log(`Running on port ${port}`));