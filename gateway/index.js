const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use('/characters', createProxyMiddleware({
    //target: 'http://localhost:8001',
    target: 'http://characters:8001',
    changeOrigin: true
    })
);

app.use('/films', createProxyMiddleware({
    target: 'http://films:8002',
    changeOrigin: true
    })
);

app.use('/planets', createProxyMiddleware({
    target: 'http://planets:8003',
    changeOrigin: true
    })
);

app.listen(PORT, () => {
    console.log(`GATEWAY on port: ${PORT}`);
})