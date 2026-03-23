const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (FIXED)
mongoose.connect("mongodb+srv://testuser:rashu@cluster0.4akmclo.mongodb.net/portfolioDB?retryWrites=true&w=majority")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err.message));

// Schema
const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

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

        if (!name || !email || !message) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        res.json({ msg: "✅ Message saved successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error saving message" });
    }
});

// ✅ IMPORTANT for Render deployment
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT}`);
});
