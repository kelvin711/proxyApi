const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config();

const app = express();

const API_URL = process.env.API_URL;

app.use('/api', createProxyMiddleware({
    target: API_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api': '',
    },
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});