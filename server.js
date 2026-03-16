const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// API Routes
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        app: 'PiOrbit ULTRA PRO MAX',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/user/:username', (req, res) => {
    res.json({
        username: req.params.username,
        points: Math.floor(Math.random() * 1000),
        level: Math.floor(Math.random() * 5) + 1
    });
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Catch all route for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Open http://localhost:${PORT}`);
});