const Product = require("../models/product");

module.exports.createProduct = async (req, res) => {
    const { productName, brand, gender, category, price, images } = req.body;
    // TODO: validate fields
    try {
        const product = await Product.create({
            productName,
            brand,
            gender,
            category,
            price,
            images,
        });
        console.log(product);
        res.status(201).json({ body: product });
    } catch (e) {
        console.log({ e });
    }
};

module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().lean();
        res.status(200).json({ products });
    } catch (e) {
        console.log({ e });
    }
};
