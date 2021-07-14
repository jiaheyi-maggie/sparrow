// nodeJS server
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
dotenv.config(); 
// app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;
let LINK_TOKEN = null;

const port = 19002;

const plaid = require('plaid');

// create a plaid client: this app
const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
});

// front page: link
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/types/plaid-link.html'));
})

// client
app.get('/client', (req, res) => {
    res.send(client);
})

function handleError(error) {
    console.log(error);
}


// create link token
app.post('/create_link_token', async (req, res) => {
    const configs = {
        user: {
            client_user_id: "1234",
        },
        client_name: "Sparrow",
        products: ["auth", "transactions"],
        country_codes: ["US"],
        language: "en",
    }

    // for oauth
    if (process.env.PLAID_REDIRECT_URI != '') {
        configs.redirect_uri = PLAID_REDIRECT_URI;
    }

    const response = await client.createLinkToken(configs);
    const linkToken = response.link_token;
    LINK_TOKEN = linkToken;
    res.json(linkToken);
})

// do not need to regenerate link token again
app.get('/create_link_token', async (req, res) => {
    const configs = {
        user: {
            client_user_id: "1234",
        },
        client_name: "Sparrow",
        products: ["auth", "transactions"],
        country_codes: ["US"],
        language: "en",
    }

    const response = await client.createLinkToken(configs);
    const link_token = response.link_token;
    res.send(link_token);
})

// exchange public token for access token
app.post('/plaid_token_exchange', async (request, response) => {
    const { publicToken } = request.body.public_token;
    PUBLIC_TOKEN = publicToken;

    try {
        // const tokenResponse = await client.exchangePublicToken({public_token: PUBLIC_TOKEN});
        const tokenResponse = await client.exchangePublicToken(publicToken);
        const { access_token } = tokenResponse.data.access_token;
        const { item_id } = tokenResponse.data.item_id;

        ACCESS_TOKEN = access_token;
        ITEM_ID = item_id;

        response.json({
            access_token: access_token,
            item_id: item_id,
            error: null,
        });
    } catch(error) {
        handleError(error);
        return response.json(formatError(error.response));
    }

    // const { access_token } = await client.exchangePublicToken(publicToken).catch(handleError);
    // const { accounts, item } = await client.getAccounts(access_token).catch(handleError);
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})