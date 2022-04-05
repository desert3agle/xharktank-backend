const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/newdb";

//Database Connection

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log('DB is connected');
        });
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = connectDB;