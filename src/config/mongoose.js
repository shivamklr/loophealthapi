const mongoose = require("mongoose");

const { DB_URI } = require("./config");
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
    console.log("Connected to Database :: MongoDB Cloud");
});

module.exports = db;
