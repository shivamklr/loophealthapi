const { query } = require("express-validator");
const { priceValidator } = require("../utils/helper");
module.exports.fetchValidator = [
    query("gender", `gender length should not be over 20`)
        .optional({ nullable: true })
        .isLength({ min: 1, max: 20 })
        .isAlphanumeric()
        .withMessage("should be alphanumeric"),
    query("category", `category length should not be over 20`)
        .optional({ nullable: true })
        .isLength({
            min: 0,
            max: 20,
        })
        .isAlphanumeric()
        .withMessage("should be alphanumeric"),
    query("brand", `brand length should not be over 20`)
        .optional({ nullable: true })
        .isLength({
            min: 0,
            max: 20,
        })
        .isAlphanumeric()
        .withMessage("should be alphanumeric"),
    priceValidator
];
