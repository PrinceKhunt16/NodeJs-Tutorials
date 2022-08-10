const {readFile, writeFile, read} = require('fs');

readFile('./dummy.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return;
    }

    let fake = res;
    console.log(fake);

    readFile('./dummyTwo.txt', 'utf-8', (err, res) => {
        if(err){
            console.log(err);
            return;
        }

        fake = res;
        console.log(res);
    });
});