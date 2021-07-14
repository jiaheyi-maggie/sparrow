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

var ACCESS_TOKEN;
var PUBLIC_TOKEN;
var ITEM_ID;
var LINK_TOKEN;

function handleError(error) {
    console.log(error);
}

const formatError = (error) => {
    return {
      error: { ...error.data, status_code: error.status },
    };
};

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

    // for oauth
    // if (process.env.PLAID_REDIRECT_URI != '') {
    //     configs.redirect_uri = PLAID_REDIRECT_URI;
    // }

    const { link_token: linkToken } = await client.createLinkToken(configs);

    res.json({ linkToken });
})

// exchange public token for access token
app.post('/plaid_token_exchange', async (req, res) => {
    // const { publicToken } = req.body.public_token;
    const { publicToken } = req.body;

    // try {
    //     // const tokenResponse = await client.exchangePublicToken({public_token: PUBLIC_TOKEN});
    //     const tokenResponse = await client.exchangePublicToken(publicToken);
    //     const { access_token } = tokenResponse.data.access_token;
    //     const { item_id } = tokenResponse.data.item_id;

    //     ACCESS_TOKEN = access_token;
    //     ITEM_ID = item_id;

    //     res.json({
    //         access_token: access_token,
    //         item_id: item_id,
    //         error: null,
    //     });
    // } catch(error) {
    //     handleError(error);
    //     return res.json(formatError(error.response));
    // }
    const { access_token: accessToken } = await client.exchangePublicToken(publicToken).catch(handleError);
    // const { accounts, item } = await client.getAccounts(access_token).catch(handleError);

    // api
    const authResponse = await client.getAuth(accessToken);
    console.log('_________');
    console.log("auth response");
    console.log(util.inspect(authResponse, false, null, true));

    const identityResponse = await client.getIdentity(accessToken);
    console.log('_________');
    console.log("identity response");
    console.log(util.inspect(identityResponse, false, null, true));

    const balanceResponse = await client.getBalance(accessToken);
    console.log('_________');
    console.log("balance response");
    console.log(util.inspect(balanceResponse, false, null, true));

    res.sendStatus(200);
    
})

// app.get('/create_link_token', async (req, res) => {
//     const configs = {
//         user: {
//             client_user_id: "1234",
//         },
//         client_name: "Sparrow",
//         products: ["auth", "transactions"],
//         country_codes: ["US"],
//         language: "en",
//     }

//     const response = await client.createLinkToken(configs);
//     const link_token = response.link_token;
//     // LINK_TOKEN=link_token;
//     // console.log(LINK_TOKEN);
//     res.send(link_token);
// })


// investment transavtions for an Item
app.get('/transactions', async (req, res) => {
    // pull transactions for item for the last 30 days
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var dayStart = day - 30; 

    const endDate = `${year}-${month}-${day}`;
    const startDate = `${year}-${month}-${dayStart}`;

    const configs = {
        access_token: ACCESS_TOKEN,
        start_date: startDate,
        end_date: endDate,
    }

    const response = await client.getInvestmentTransactions(configs)
    .catch(handleError);

    res.json(response);
})

// Retrieve real-time Balances for each of an Item's accounts
app.get('/balance', async function (req, res) {
    try {
      const balanceResponse = await client.getBalance(ACCESS_TOKEN);
      res.json(balanceResponse.data);
    } catch (error) {
      return res.json(formatError(error.response));
    }
  });
  
// Retrieve Holdings for an Item
app.get('/holdings', async function (req, res) {
    try {
        const holdingsResponse = await client.getHoldings(ACCESS_TOKEN);
        res.json({ error: null, holdings: holdingsResponse.data });
    } catch (error) {
        return res.json(formatError(error.response));
    }
});

// Retrieve information about an Item
app.get('/item', async function (req, res, next) {
    try {
        // Pull the Item - this includes information about available products,
        // billed products, webhook information, and more.
        const itemResponse = await client.getItem(ACCESS_TOKEN);
        // Also pull information about the institution
        const configs = {
            institution_id: itemResponse.data.item.institution_id,
            country_codes: ['US'],
        };
        const instResponse = await client.getInstitutionById(configs);
        res.json({
            item: itemResponse.data.item,
            institution: instResponse.data.institution,
        });
    } catch (error) {
        handleError(error);
        return response.json(formatError(error.response));
    }
});

// Retrieve an Item's accounts
app.get('/accounts', async function (req, res, next) {
    try {
      const accountsResponse = await client.getAccounts(ACCESS_TOKEN);
      res.json(accountsResponse.data);
    } catch (error) {
        handleError(error);
      return res.json(formatError(error.response));
    }
});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
