// nodeJS server
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const port = 19002;

const app = express();
dotenv.config(); 
// app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const plaid = require('plaid');
let link_token = null;

const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
});

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/types/plaid-link.html'));
})

app.get('/client', (req, res) => {
    res.send(client);
})

function handleError(error) {
    console.log(error);
}

app.post('/plaid_token_exchange', async (request, response) => {
    const { publicToken } = request.body;

    const { access_token } = await client.exchangePublicToken(publicToken).catch(handleError);

    const { accounts, item } = await client.getAccounts(access_token).catch(handleError);

    console.log({
        accounts,
        item
    })
})

app.get('/create_link_token', async (req, res) => {
    const response = await client.createLinkToken({
        user: {
            client_user_id: "1234",
        },
        client_name: "Sparrow",
        products: ["auth", "transactions"],
        country_codes: ["US"],
        language: "en",
    }).catch(handleError);

    link_token = response.link_token;
    res.send(link_token);
})

// replace link token instead of generating multiple sockets
app.put('/create_link_token', (req, res) => {
    res.send(link_token);
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})