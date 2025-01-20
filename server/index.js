const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8888; 

app.get('/', (req, res) => {
    res.send('Hello, Kalvians! Your backend server is live!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});