const Product = require("../models/product");
const { distinctField } = require("../utils/helper");

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
        throw e;
    }
};

module.exports.getProducts = async (req, res) => {
    const { brand, gender, category, price } = req.query;
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
    if (price) {
        filters.price = { $gte: price.startPrice, $lte: price.endPrice };
    }
    try {
        const products = await Product.find(filters).lean();
        const productsCount = products.length;
        res.status(200).json({
            data: {
                products,
                productsCount,
                appliedParams: { ...filters },
            },
        });
    } catch (e) {
        throw e;
    }
};

module.exports.getFilters = async (req, res) => {
    try {
        const genders = await distinctField("gender");
        const brands = await distinctField("brand");
        const categories = await distinctField("category");
        const prices = {};
        const maxDoc = await Product.find().sort({ price: -1 }).limit(1);
        const minDoc = await Product.find().sort({ price: 1 }).limit(1);
        prices.min = await minDoc[0].price;
        prices.max = await maxDoc[0].price;
        res.status(200).json({
            filters: { genders, brands, categories, prices },
        });
    } catch (e) {
        throw e;
    }
};
