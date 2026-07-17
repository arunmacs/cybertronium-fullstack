const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// This file is the entry point for running Next.js natively on a custom server or IISNode (Plesk).
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
}).catch((err) => {
    console.error('Error starting Next.js server:', err);
    process.exit(1);
});
