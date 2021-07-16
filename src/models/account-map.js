const { model, Schema } = require('mongoose');

const mappingSchema = new Schema({
    account_id: String,
    name: String,
})

module.exports = model("AccountMap", mappingSchema);