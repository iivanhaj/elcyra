// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3001;

// Set up Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original file name
    }
});

// Create Multer middleware
const upload = multer({ storage: storage });

// Define route for file upload
app.post('/api/upload', upload.single('assignmentFile'), (req, res) => {
    // Get the file information from the request object
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    // Process the uploaded file, e.g., save it to the database, etc.
    res.send('File uploaded successfully.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
