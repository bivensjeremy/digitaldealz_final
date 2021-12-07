require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require('path');
const stripe = require("stripe")(process.env.REACT_APP_SECRET_STRIPE);

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'),  function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.post("/create-payment-intent", async (req, res) => {
    let { amount, id, customer } = req.body;
  
    try {
      const payment = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "USD",
        description: "Bivens Blueprint | Digital Dealz",
        payment_method: id,
        receipt_email: customer.email,
        shipping: {
          name: customer.name,
          address: {
            line1: customer.address.line1,
            line2: customer.address.line2,
            city: customer.address.city,
            postal_code: customer.address.postal_code
          }
        },
        confirm: true
      });
      res.json({
        message: "Payment Successful",
        success: true,
      });
    } catch (error) {
      console.log("stripe-routes.js 17 | error", error);
      res.json({
        message: "Payment Failed",
        success: false,
      });
    }
  });

app.post("/Contact", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  
  const smtpTrans = nodemailer.createTransport({
    host: process.env.REACT_APP_HOST,
    port: 465,
     secure: true,
     auth: {
       user: process.env.REACT_APP_USER,
       pass: process.env.REACT_APP_PASS
     }
    });

  const mailOpts = {
    from: 'contact@bivensblueprint.com',
    to: 'admin@bivensblueprint.com',
    subject: `Digital Dealz Email`,
    html: `<b>Name:</b> ${name} <br> <b>Email:</b> ${email} <br> <b>Message:</b> ${message}`
  }
    smtpTrans.sendMail(mailOpts, function(err, success) {
      if (err) {
        res.json({
          status: 'fail'
        })
        log(err)
      } else {
        res.json({
          status: 'success'
        })
        log('message sent')
      }
    });
  });



app.listen(3000)