const router = require('express').Router();

const payment = require('./controllers/payment');
const Home = require('./controllers/home');


// const keys = require('../config/keys');


router.get('/',Home);

router.post('/pay',payment);



module.exports = router;