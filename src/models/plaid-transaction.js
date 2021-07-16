const { model, Schema } = require('mongoose');

const transactionSchema = new Schema({
    account_id: String,
    amount: Number,
    iso_currency_code: String,
    unofficial_currency_code: String,
    category: Array,
    category_id: String,
    date: String,
    datetime: String,
    authorized_date: String,
    authorized_datetime: String,
    location: {
        address: String,
        city: String,
        region: String,
        postal_code:String,
        country: String,
        lat: String,
        lon: String,
        store_number: String
    },
    name: String, 
    merchant_name: String,
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
    payment_channel: String,
    pending: Boolean,
    pending_transaction_id: String,
    account_owner: String,
    transaction_id: String,
    transaction_code: String,
    transaction_type: String,
})

module.exports = model("PlaidTransaction", transactionSchema);