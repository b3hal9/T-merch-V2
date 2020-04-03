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
        .then(res=>res.render('success'));
    }

    module.exports = payment;