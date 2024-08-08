const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    type: { type: String, required: true },
    value: { type: Number, required: true },
    target: { type: String, required: true },
    description: String,
    code: String,
});

module.exports = mongoose.model('Discount', discountSchema);
