const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 PUT YOUR MONGODB CONNECTION STRING HERE
mongoose.connect("mongodb+srv://testuser:test123@cluster0.4akmclo.mongodb.net/portfolioDB?retryWrites=true&w=majority")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err.message));

// Schema
const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model("Message", MessageSchema);

// Routes

// Test route
app.get('/', (req, res) => {
    res.send("🚀 Server is running");
});

// Contact form API
app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save();

        res.json({ msg: "Message saved successfully ✅" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error saving message" });
    }
});

// Start server
app.listen(10000, () => {
    console.log("🔥 Server running on http://localhost:10000");
});
