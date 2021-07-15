const { model, Schema } = require('mongoose');

const accountSchema = new Schema({
    account_id: {
        type: String,
        required: true,
    },
    balances: {
        available: Number, 
        current: Number,
        iso_currency_code: String,
        limit: Number,
        unofficial_currency_code: String,
    },
    mask: String,
    name: String,
    official_name: String,
    subtype: String,
    type: String,
})
module.exports = model('PlaidAccounts', accountSchema);