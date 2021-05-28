const express = require("express");
// const axios = require("axios");

// const { createProduct } = require("./controllers/products.js");
const config = require("./config/config.js");
const db = require("./config/mongoose");
const router = require("./routes");
const PORT = process.env.PORT || config.PORT;
//express instance
const app = express();
//body parser
app.use(express.json());
// TODO: Add routes middleware
app.use(router);

app.listen(PORT, () => {
    console.log(`Listening for requests at port: http://localhost:${PORT}`);
});
// function to copy all values from mock api to mongodb cloud
// axios("https://demo7242716.mockable.io/products").then((res) =>
//     res.data.products.forEach(({productName, brand, gender, category, price, images}) =>
//         createProduct({ body: {productName, brand, gender, category, price, images} },{})
//     )
// );
