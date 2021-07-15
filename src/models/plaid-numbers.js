const { model, Schema } = require('mongoose');

const numberSchema = new Schema({
    ach: [{
        account: String,
        account_id: String,
        routing: String,
        wire__routing: String,
    }],
    bacs: Array,
    eft: Array,
    international: Array,
});

module.exports = model("PlaidNumbers", numberSchema);

