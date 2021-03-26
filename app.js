const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use('/',bodyParser.json());

app.use(function(_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

//Import Routes
const queriesRoute = require('./routes/queries');

app.use('/queries',queriesRoute);

//ROUTES
app.get('/', (_, res) => {
    res.send("Server is UP and Running!!!");
});

//How to start listening to server
app.listen(process.env.PORT || 3000);