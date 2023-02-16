const fs = require('node:fs')

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2
})

const writeableStream = fs.createWriteStream('./file2.txt')

readableStream.on('data', (chunk) => {
  console.log(chunk)
  writeableStream.write(chunk)
})

/*

Readable streams from which data can be read.
Ex ~> Reading from a file as readable stream.

Writeable streams to which we can write 
data.
Ex ~> Writing to a file as writable stream.

Duplex streams that are both Readable and Writeable.
Ex ~> Sockets as a duplex stream.

Transform streams that can modify or transform the data as it is written and read.
Ex ~> File compression where you can write compressed data and read de-compressed data to and from a file as a transform stream.

*/