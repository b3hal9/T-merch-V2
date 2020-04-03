const express = require('express');
const app = express();
const keys = require('./config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const router=require('./routes/pay');






app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'/public')));   
// app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use(router);

  

const Port = process.env.Port || 5000;


app.listen(Port,()=>console.log(`Server is running on Port ${Port}.`));
