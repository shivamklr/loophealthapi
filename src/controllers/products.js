const Product = require("../models/product");

// FIXME: error handling missing
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
        // TODO: add applied filters
        res.status(200).json({ data: { products } });
    } catch (e) {
        console.log({ e });
    }
};

module.exports.getFilters = async (req, res) => {
    try {
        let genders;
        await Product.find({}).distinct("gender", (err, genderList) => {
            if (err) throw new Error("Error while finding distinct gender");
            genders = genderList;
        });
        let brands;
        await Product.find({}).distinct("brand", (err, brandList) => {
            if (err) throw new Error("Error while finding distinct brand");
            brands = brandList;
        });
        let categories;
        await Product.find({}).distinct("category", (err, categoryList) => {
            if (err) throw new Error("Error while finding distinct category");
            categories = categoryList;
        });
        res.status(200).json({ filters: { genders, brands, categories } });
    } catch (error) {
        console.log({ e });
    }
};
