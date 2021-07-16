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
const PlaidNumbers = require('./src/models/plaid-numbers');
const PlaidToken = require('./src/models/plaid-token');
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
db.once('open', () => {
    // callback function for successful connection
    console.log('connected to mongoDB server');
})

const plaid = require('plaid');

// create a plaid client: this app
const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
});

// const ACCESS_TOKEN = null;


// front page: link
app.get('/', async (request, response) => {
    response.sendFile(path.join(__dirname, 'src/types/plaid-link.html'));
})

app.get('/bank/visual', async (request, response) => {
    response.sendFile(path.join(__dirname, 'src/screens/main/MongoGraph.html'));
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

    // ACCESS_TOKEN = accessToken;

    const tokenModel = new PlaidToken({
        publicToken: publicToken,
        accessToken: accessToken,
    });

    // console.log(accessToken);

    await tokenModel.save(function (error, doc){
        if (error) {
            console.log(error);
        }
        console.log(doc);
    })

    // api
    const authResponse = await client.getAuth(accessToken)
        .catch((error) => {
            console.log(error)
        });
    console.log('_________');
    console.log("auth response");
    // console.log(util.inspect(authResponse, false, null, true));
    const numberModel = new PlaidNumbers(authResponse.numbers);
    numberModel.save(function (error, doc){
        if (error) {
            console.log(error);
        }
        // console.log(doc);
    })


    const identityResponse = await client.getIdentity(accessToken)
        .catch((error) => {
            console.log(error)
        });
    console.log('_________');
    console.log("identity response");
    // console.log(util.inspect(identityResponse, false, null, true));
    
    const itemModel = new PlaidItem(identityResponse.item);
    itemModel.save(function (error, doc) {
        if (error) {
            console.log(error);
        }
        console.log(doc);
    })

    const balanceResponse = await client.getBalance(accessToken)
        .catch((error) => {
            console.log(error)
        });
    console.log('_________');
    console.log("balance response");
    // console.log(util.inspect(balanceResponse, false, null, true));
    
    // save to mongoDB by iterating through the array of "accounts"
    for (var i = 0; i < balanceResponse.accounts.length; i++) {
        const doc = balanceResponse.accounts[i];
        const docModel = new PlaidAccounts(doc);

        docModel.save(function (error, doc) {
            if (error) {
                console.log(error);
            }
            // console.log(doc);
        })
    }
    res.sendStatus(200);
})


app.get('/api/accounts', async (req, res) => {
    PlaidAccounts.find({})
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        res.send(error);
    });
})

function replaceAt(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index+1, string.length);
}

async function getTransactions(token, start, end, params=null) {
    const response = await client.getTransactions(token, start, end, params)
    .catch((error) => {
        console.log(error)
    });
    let transactions = response.transactions;
    let total_transactions = response.total_transactions;
    return {transactions, total_transactions};
}

app.get('/transactions/get', async (req, res) => {
    const date = new Date();
    const prevMonth = date.getMonth()-1; 
    const currDateString = date.toISOString().substring(0, 10);
    const prevDateString = replaceAt(currDateString, 6, prevMonth);

    PlaidToken.find({})
    .then((data) => {
        const token = data[data.length-1].accessToken;
        const result = getTransactions(token, prevDateString, currDateString);
        console.log(result);
        const transactions = result.transactions;
        const total_transactions = result.total_transactions;

        // // handle parameters for pagination && retrieve a month of data
        // while (transactions.length < total_transactions) {
        //     const paginationTransactionResponse = getTransactions(token, prevDateString, currDateString, {
        //         offset: transactions.length,
        //     })

        //     transactions = transactions.concat(paginationTransactionResponse.transactions);
        // }
        res.send(transactions);
    })
    .catch((error) => {
        console.log(error)
    });


    
})


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
