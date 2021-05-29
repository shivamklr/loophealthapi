const express = require("express");
const { getProducts, getFilters } = require("../controllers/products");
const { fetchValidator } = require("../middleware/validateQuery");
const { validationCheck } = require("../middleware/validationPass");
const router = express.Router();
// GET /products
router.get("/", fetchValidator, validationCheck, getProducts);
// GET /products/filters
router.get("/filters", getFilters);
module.exports = router;
