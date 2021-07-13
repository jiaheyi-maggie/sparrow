// nodeJS server
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = 19002;

const app = express();
dotenv.config(); 
// app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const plaid = require('plaid');

const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
});

console.log(client);

app.get('/', (request, response) => {
    // response.send("hello world");
    response.json({
        message: 'Hello World'
    })
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


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})