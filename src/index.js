const express = require("express");

const config = require("./config/config.js")
const db = require("./config/mongoose");
const router = require("./routes");
const PORT = process.env.PORT||config.PORT;
//express instance
const app = express();
//body parser
app.use(express.json());
// TODO: Add routes middleware
app.use(router)

app.listen(PORT, ()=>{
    console.log(`Listening for requests at port: http://localhost:${PORT}`);
});