const request = require('request');

const HOST = '127.0.0.1';
const PORT = '8080';

function Ping() {

    return new Promise((resolve, reject) => {

        request({
            url: `http://${HOST}:${PORT}/ping`,
            method: 'GET',
        }, (err, res, body) => {
            
            if (err) { 
                return reject(err);
            }

            return resolve(body);
        });
    });
}

async function startTest() {

    let count = 0;

    setTimeout(() => {

        console.log(`transmited count: ${count}`);
        process.exit();

    }, 1000);

    while(true) {

        await Ping();
        count += 1;
    }
    
}

startTest();