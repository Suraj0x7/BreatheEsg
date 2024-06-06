const mongoose = require("mongoose");

const url = "mongodb+srv://surajraipatti:gUEuXKhJ2fTwrAp1@cluster0.9gsrr2m.mongodb.net/Data";

const dbConnect = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MongoDb Connected Successfully");
        })
        .catch((e) => {
            console.log("MongoDb connection Error", e);
        });
};

module.exports = dbConnect;
