'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const { exec } = require('child_process');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {

    let max = req.query.max;
    let iteration = req.query.iteration;

    exec(`./compute.exe ${max} ${iteration}`, {cwd: path.resolve(__dirname) }, (error, stdout, stderr) => {

        if (error) {
            console.error(error);
            return res.json({
                result: false,
                error: error,
                duration: null
            });
        }

        let duration = parseFloat(stdout);

        return res.json({
            result: true,
            error: null,
            duration: duration
        });
    });
});

// Start server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);