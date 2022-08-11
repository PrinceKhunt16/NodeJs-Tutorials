const { createReadStream } = require('fs');

const stream = createReadStream('./stream.txt', {
    highWaterMark: 90000, 
    encoding: 'utf-8'
});

stream.on('data', (result) => {
    console.log(result);
});