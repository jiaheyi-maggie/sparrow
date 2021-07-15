const { model, Schema } = require('mongoose');

const tokenSchema = new Schema({
    publicToken: String,
    accessToken: String,
})

module.exports = model("PlaidToken", tokenSchema);