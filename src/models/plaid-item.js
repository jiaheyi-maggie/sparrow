import { model, Schema } from "mongoose";

module.exports = model('PlaidItem', new Schema({
    available_products: Array,
    billed_products: Array,
    error: String,
    institution_id: String,
    item_id: String,
    update_type: String,
    webhook: String,
    consent_expiration_time: String
}))