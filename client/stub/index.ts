import path = require('path');
import axios from 'axios';
import express = require('express');
import { Response } from 'express';
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
import webpackConfig = require('../webpack-config');

const app = express();

const PORT = 3030;

app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.post('/api/login', (req, res) => {
    //@ts-ignore
    console.log(req.body);
    res.json({ cool: true });
});

app.get('/api*', (_, res: Response) => {
    axios.get(`http://localhost:8080${_.path}`)
        .then((response) => res.json(response.data))
        .catch(e => console.error(e));
});

app.get('/*', (_, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => 'Dev server started');