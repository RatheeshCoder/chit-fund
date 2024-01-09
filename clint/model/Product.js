// model/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalDays: {
        type: Number,
        required: true,
    },
    monthlyPay: {
        type: Number,
        required: true,
    },
    weeklyPay: {
        type: Number,
        required: true,
    },
    dailyPay: {
        type: Number,
        required: true,
    },
    moreDetails: [
        {
            columnName: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
        },
    ],
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
