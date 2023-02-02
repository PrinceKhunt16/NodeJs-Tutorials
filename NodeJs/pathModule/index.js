const path = require('node:path')

console.log(__filename)
console.log(__dirname)

console.log(path.basename(__filename))
console.log(path.basename(__dirname))

console.log(path.extname(__filename))
console.log(path.extname(__dirname))

console.log(path.dirname(__filename))
console.log(path.dirname(__dirname))

console.log(path.parse(__filename))

console.log(path.isAbsolute(__filename))

console.log(path.join(__dirname, 'app.js'))

console.log(path.resolve(__dirname, 'app.js'))