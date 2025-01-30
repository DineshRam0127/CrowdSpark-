const Razorpay = require('razorpay');
const express = require('express');
const app = express();
app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'YOUR_RAZORPAY_KEY_ID',
  key_secret: 'YOUR_RAZORPAY_KEY_SECRET',
});

app.post('/api/payment/createOrder', async (req, res) => {
  const { amount } = req.body; // amount in paise (100 paise = 1 INR)

  try {
    const options = {
      amount: amount, // Amount in paise
      currency: 'INR',
      receipt: 'order_receipt_' + Math.random().toString(36).substr(2, 9),
      payment_capture: 1,
    };
    const order = await razorpay.orders.create(options);
    res.json({
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating order');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
