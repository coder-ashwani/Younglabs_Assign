const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

// app.use(express.static(path.join(__index.html, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/greet', (req, res) => {
    const name = req.query.name;
    
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});


app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
})