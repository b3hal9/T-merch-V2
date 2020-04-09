
const keys = require('../../config/keys');

module.exports = Home = (req,res)=>{
    res.render('index',{stripePublishableKey: keys.stripePublishableKey});
};

