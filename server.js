// nodeJS server
const express = require('express');
const bodyParser = require('body-parser');
const port = 19002;

const app = express();
app.use(express.json());

const plaid = require('plaid');

const client = new plaid.Client({
    clientID: "60e452c919a2660010f8bcc1",
    secret: "b5e1e0bc4c95d7c053b38f7c17db50",
    env: plaid.environments.sandbox,
});

app.get('/', (request, response) => {
    response.send("hello world");
})

app.post('/link/token/create', async (request, response) => {
    try {
        const tokenResponse = await client.createLinkToken({
            user: {
              client_user_id: '1234',
            },
            client_name: 'Sparrow',
            products: ["auth", "transactions"],
            country_codes: ['US'],
            language: 'en',
        });
        response.send(resonse.json(tokenResponse));
        return response.json(tokenResponse);
        //   console.log(response.json(tokenResponse));
    } catch (e) {
        // display in local host 
        return response.send({ error: e.message });
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})