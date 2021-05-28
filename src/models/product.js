const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: [{ view: String, src: String }],
},{
    strictQuery:true
});
module.exports = mongoose.model("Product", productSchema);
