// Server Express starter and quick route setup
const express = require('express');
const app = express();
const dotenv = require('dotenv');
// use dotenv to load environment variables from .env file
dotenv.config();
const port = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(MONGODB_URL, {
}).then(() => {
    console.log('Connected to MongoDB');
    // Console log the database name
    console.log('Database name: ' + mongoose.connection.name);
}
).catch((err) => {
    console.log(err);
}
);

// SIMPLE INDEX WHO SERVE A INDEX.HTML IN THE PUBLIC FOLDER
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


// Start express server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

