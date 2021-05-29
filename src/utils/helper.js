const Product = require("../models/product");
module.exports.distinctField = async (field) => {
    let distinctList;
    await Product.find({}).distinct(field, (err, list) => {
        if (err) throw new Error("Error while finding distinct gender");
        distinctList = list;
    });
    return distinctList;
};
module.exports.priceValidator = (req, res, next) => {
    const { price } = req.query;
    if (req.query.price) {
        if (
            !(
                price.startPrice &&
                price.endPrice &&
                isNumeric(price.startPrice) &&
                isNumeric(price.endPrice) &&
                parseInt(price.startPrice) <= parseInt(price.endPrice)
            )
        ) {
            return res.status(422).json({
                errors: [
                    {
                        value: {...price},
                        msg: "price invalid",
                        param: "price",
                        location: "query",
                    },
                ],
            });
        }
    }
    next();
};
function isNumeric(num) {
    if (num.length > 9) return false;
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let i = 0;
    while (i < num.length) {
        if (!values.includes(num.charAt(i))) return false;
        i++;
    }
    return true;
}
