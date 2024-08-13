const express = require('express');
const app = express();

// Middleware to handle redirection
app.get('/', (req, res) => {
    // Final destination URL
    const amazonUrl = 'https://www.amazon.com/Simple-Joys-Carters-Short-Sleeve-Bodysuit/dp/B07GY1RRZF';

    // Log the redirection URL for debugging purposes
    console.log(`Redirecting to: ${amazonUrl}`);

    // Redirect all requests to the final Amazon page
    res.redirect(302, amazonUrl);
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Redirection service running on port ${port}`);
});
