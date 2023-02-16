const fs = require('node:fs')

console.log('hyy')

const fc = fs.readFileSync('./file.txt', 'utf-8')
console.log(fc) 

console.log('hyy hyy')

fs.readFile('./file.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
})

console.log('hyy hyy hyy')

console.log('me')

fs.writeFileSync('./greet.txt', "Hyy John Doe")
 
console.log('me me')

fs.writeFile('./greet.txt', ' Hyy John Doe', {flag: 'a'}, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Done')
  }
})

console.log('me me me')