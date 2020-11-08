import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from '../src/App'

const app = express()
// const PORT = 8000;
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.get('*', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send("some errors")
        }
        const context = {};
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root" class="test">${app}</div>`));
    });
});
app.listen(PORT, () => {
    console.log(`app launched on ${PORT}`)
})
// npm i @babel/preset-env @babel/preset-react @babel/register ignore-styles