const dbConnect = require("./config/dbConnect");
const express = require("express");
const User = require("./model/User");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "aBcDeFgHiJkLmNoPqRsT";
require('dotenv').config();
const app = express();
app.use(express.json());

const corsOptions = {
    origin: process.env.SERVER,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({ message: "Name and password are required" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res
                .status(401)
                .json({ message: "Invalid name or password" });
        }

        const token = jwt.sign(
            { userId: user._id, name: user.name },
            JWT_SECRET,
            { expiresIn: "5d" }
        );

        return res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        return res.status(500).json({
            message: "Error logging in",
            error: err.message,
        });
    }
});

app.post("/signup", async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        const newUser = new User({ email, password });
        await newUser.save();
        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        return res.status(500).json({
            message: "Error creating user",
            error: err.message,
        });
    }
});

app.get("/", (req, res) => {
    return res.status(200).send("Ok from server");
});

const PORT = 4000;
dbConnect();
app.listen(PORT, () => {
    console.log(`App is Running on Port :  ${PORT}`);
});
