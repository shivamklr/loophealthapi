const { Router } = require("express");
const productsRoute = require("./products");
const productRoute = require("./product");
const router = Router();

const defaultRoutes = [
    {
        path: "/products",
        route: productsRoute,
    },
    {
        path: "/product",
        route: productRoute,
    },
];
defaultRoutes.forEach((route) => router.use(route.path, route.route));
module.exports = router;