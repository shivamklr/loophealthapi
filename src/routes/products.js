const express = require("express");
const { getProducts, getFilters } = require("../controllers/products");
const router = express.Router();
// GET /products
router.get("/", getProducts);
// GET /products/filters
router.get("/filters", getFilters);
module.exports = router;
