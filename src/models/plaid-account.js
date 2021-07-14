import { model, Schema } from "mongoose";

module.exports = model('PlaidAccounts', new Schema({
    accountId: {
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
}))