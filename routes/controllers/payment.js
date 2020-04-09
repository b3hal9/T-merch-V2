const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const payment = (req,res)=>{
    const amount=2000;
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken
    })
    .then(customer=>stripe.charges.create({
        amount,
        description:'Cooliest T-Merch in Planet.',
        currency: 'usd',
        customer:customer.id
    }))
    .then(data=>res.render('success',{data:data}));
}

    module.exports = payment;