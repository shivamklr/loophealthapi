const express = require("express");

const config = require("./config/config.js")
const app = express();
app.use(express.json());
const PORT = process.env.PORT||config.PORT;


app.listen(PORT, ()=>{
    console.log(`Listening for requests at port: http://localhost:${PORT}`);
});