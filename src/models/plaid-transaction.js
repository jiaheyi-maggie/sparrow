const { model, Schema } = require('mongoose');

const transactionSchema = new Schema({
    account_id: String,
    account_owner: String,
    amount: Number,
    authorized_date: String,
    authorized_datetime: String,
    category: Array,
    category_id: String,
    date: String,
    datetime: String,
    iso_currency_code: String,
    location: {
        address: String,
        city: String,
        country: String,
        lat: String,
        lon: String,
        postal_code:String,
        region: String,
        store_number: String
    },
    merchant_name: String,
    name: String, 
    payment_channel: String,
    payment_meta: {
        by_order_of: String,
        payee: String,
        payer: String,
        payment_method: String,
        payment_processor: String,
        ppd_id: String,
        reason: String,
        reference_number: String,
    },
    pending: Boolean,
    pending_transaction_id: String,
    transaction_code: String,
    transaction_id: String,
    transaction_type: String,
    unofficial_currency_code: String
})

module.exports = model("PlaidTransaction", transactionSchema);