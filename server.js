const express = require('express');
const app = express();
const path = require('path'); // Import the path module
const port = 3000; // You can use any port you prefer

// Serve the index.html file from the "assets" directory
app.get('/', (req, res) => {
    console.log('Request for /');
    res.sendFile(path.join(__dirname, 'assets', 'moviePicker.html'));
});

// Serve static files from the "assets" directory
app.use(express.static('assets'));
console.log('Static file serving middleware active');

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
