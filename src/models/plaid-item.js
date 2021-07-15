const { model, Schema } = require('mongoose');

const itemSchema = new Schema({
    available_products: Array,
    billed_products: Array,
    error: String,
    institution_id: String,
    item_id: String,
    update_type: String,
    webhook: String,
    consent_expiration_time: String
})

module.exports = model('PlaidItem', itemSchema);