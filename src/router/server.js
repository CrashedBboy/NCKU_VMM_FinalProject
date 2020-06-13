'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const request = require('request');
const path = require('path');
const IP = require('./ip.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World');
});

// [Test Entry]
// test performance of network between host and container
app.get('/ping', (req, res) => {
    res.send('pong');
});

// [Test Entry]
// test performance of memory allocation
// Example: http://HOST:PORT/memory?size=1024&iteration=3
// get execution time of allocate memory space of 1024MB 3 times
app.get('/memory', (req, res) => {

    let size = Math.max(req.query.size, 4);
    let iteration = Math.max(req.query.iteration, 1);

    request({
        url: `http://${IP.memory}?size=${size}&iteration=${iteration}`,
        method: 'GET',
        json: true
    }, (err, res, body) => {
        
        if (err) {
            return res.json({
                result: false,
                error: err,
                data: null
            });
        }

        if (!body.result) {
            return res.json({
                result: false,
                error: body.error,
                data: null
            });
        }

        
        return res.json({
            result: true,
            error: null,
            data: { duration: body.duration }
        });
    });
});

// [Test Entry]
// test performance of CPU computation
// Example: http://HOST:PORT/compute?max=1024&iteration=3
// get execution time of computing prime number under 1024 3 times
app.get('/compute', (req, res) => {

    let max = Math.max(req.query.max, 1024);
    let iteration = Math.max(req.query.iteration, 1);

    request({
        url: `http://${IP.compute}?max=${max}&iteration=${iteration}`,
        method: 'GET',
        json: true
    }, (err, res, body) => {
        
        if (err) { 
            console.log(err);

            return res.json({
                result: false,
                error: err,
                data: null
            });
        }

        console.log(body);
        return res.json({
            result: true,
            error: null,
            data: {
                duration: body.duration
            }
        });
    });
});

// [Test Entry]
// test performance of Disk read/write
// Example: http://HOST:PORT/disk?size=1024&iteration=3
// get execution time of writing & reading 1024 characters 3 times
app.get('/disk', (req, res) => {

    let size = Math.max(req.query.size, 1024);
    let iteration = Math.max(req.query.iteration, 1);

    request({
        url: `http://${IP.disk}?size=${size}&iteration=${iteration}`,
        method: 'GET',
        json: true
    }, (err, res, body) => {
        
        if (err) { 
            console.log(err);

            return res.json({
                result: false,
                error: err,
                data: null
            });
        }

        console.log(body);
        return res.json({
            result: true,
            error: null,
            data: {
                duration: body.duration
            }
        });
    });
});

// Start server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);