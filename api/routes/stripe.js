const router = require("express").Router();
const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_API_SECRET);
// const stripe = Stripe(
//   "sk_test_51ISp76GSiXLf8ZJ09jBe9jsCO02HSGxw7WbpsLHZhlOlbgsxAmlYdB8Oz0mMxkNNMIjWiFCJH734Rns7S4fGgcFa005phHi85E"
// );

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
        console.log(stripeErr);
      } else {
        res.status(200).json(stripeRes);
        console.log(stripeRes);
      }
    }
  );
});

module.exports = router;
