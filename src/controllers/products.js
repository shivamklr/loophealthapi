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
    const { brand, gender, category } = req.query;
    console.log(req.query);
    // TODO: validate query params
    // TODO: implement caching
    const filters = {};
    if (brand) {
        filters.brand = brand;
    }
    if (gender) {
        filters.gender = gender;
    }
    if (category) {
        filters.category = category;
    }
    try {
        const products = await Product.find(filters).lean();
        res.status(200).json({ data: { products } });
    } catch (e) {
        console.log({ e });
    }
};
