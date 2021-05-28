const express = require("express");
const { createProduct } = require("../controllers/products");
const router = express.Router();
// POST /product
router.post("/", createProduct);
module.exports = router;
