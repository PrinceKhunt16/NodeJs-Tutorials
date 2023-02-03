const EventEmitter = require('node:events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved by ${name} and his id is ${id}`)
})

customEmitter.on('response', () => {
    console.log(`data passed`)
})

customEmitter.emit('response', 'john', 34)