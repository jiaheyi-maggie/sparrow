// nodeJS + mongoDB server
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// allow json inspection
const util = require('util'); 
const port = 19002;

const mongoose = require('mongoose');
const PlaidItem = require('./src/models/plaid-item');
const PlaidAccounts = require('./src/models/plaid-account');
const User = require('./src/models/user');

const app = express();
dotenv.config(); 
app.use(bodyParser.urlencoded({extended: true}));
// going to use json when calling bodyParser
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error: "));

const plaid = require('plaid');

// create a plaid client: this app
const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
});


// front page: link
app.get('/', async (request, response) => {
    response.sendFile(path.join(__dirname, 'src/types/plaid-link.html'));
})

// client
app.get('/client', (req, res) => {
    res.send(client);
})

// logic to create link token: call in html files
app.get('/create_link_token', async (req, res) => {
    const configs = {
        user: {
            client_user_id: "1234",
        },
        client_name: "Sparrow",
        products: ["auth", "transactions", 'identity'],
        country_codes: ["US"],
        language: "en",
    }

    const { link_token: linkToken } = await client.createLinkToken(configs)
        .catch((error) => {
            console.log(error)
        });

    res.json({ linkToken });
})

// exchange public token for access token
app.post('/plaid_token_exchange', async (req, res) => {
    const { publicToken } = req.body;
    const { access_token: accessToken } = await client.exchangePublicToken(publicToken)
    .catch((error) => {
        console.log(error)
    });

    // api
    const authResponse = await client.getAuth(accessToken)
        .catch((error) => {
            console.log(error)
        });
    console.log('_________');
    console.log("auth response");
    console.log(util.inspect(authResponse, false, null, true));

    const identityResponse = await client.getIdentity(accessToken)
        .catch((error) => {
            console.log(error)
        });
    console.log('_________');
    console.log("identity response");
    console.log(util.inspect(identityResponse, false, null, true));

    const balanceResponse = await client.getBalance(accessToken)
        .catch((error) => {
            console.log(error)
        });
    console.log('_________');
    console.log("balance response");
    console.log(util.inspect(balanceResponse, false, null, true));

    res.sendStatus(200);
    
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
