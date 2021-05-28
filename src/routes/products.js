const express = require("express");
const { getProducts } = require("../controllers/products");
const router = express.Router();
// GET /products
router.get("/", getProducts);
module.exports = router;
