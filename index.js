const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data
let items = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 99.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Feature-rich smartwatch with health tracking.",
        price: 149.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        name: "Mechanical Keyboard",
        description: "Tactile mechanical keyboard for typing and gaming.",
        price: 79.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b91a91e?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        name: "Gaming Mouse",
        description: "Ergonomic gaming mouse with high DPI.",
        price: 49.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 5,
        name: "Laptop Stand",
        description: "Adjustable laptop stand for ergonomic viewing.",
        price: 29.99,
        category: "Home",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 6,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub for connectivity.",
        price: 39.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1628859747806-03c7349b142d?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 7,
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness.",
        price: 24.99,
        category: "Home",
        image: "https://images.unsplash.com/photo-1534073828943-f801091a7d58?auto=format&fit=crop&q=80&w=600"
    }
];

// Routes

// Get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Get single item
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
});

// Add new item
app.post('/api/items', (req, res) => {
    const { name, description, price, image } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }

    const newItem = {
        id: items.length + 1,
        name,
        description,
        price,
        image: image || "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=600" // Default image
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

// Mock Login
// Accept email and password, return success if matches mock credentials
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Hardcoded credentials for mock login
    if (email === 'test@example.com' && password === 'password123') {
        res.json({
            success: true,
            message: 'Login successful',
            user: { email: 'test@example.com', name: 'Test User' },
            token: 'mock-jwt-token-xyz-123'
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
