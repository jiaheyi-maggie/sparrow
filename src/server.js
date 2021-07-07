require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

const plaid = require('plaid');

const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
});

app.post('')