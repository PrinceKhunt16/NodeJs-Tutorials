const http = require('http')
const fs = require('fs')

http.createServer(function(req, res){
    /*

    const text = fs.readFileSync('./stream.txt', 'utf-8');
    res.end(text);
    
    */

    const fileStream = fs.createReadStream('./stream.txt', 'utf-8');
    
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })

    fileStream.on('error', (error) => {
        console.log(error);
    })

}).listen(5000)