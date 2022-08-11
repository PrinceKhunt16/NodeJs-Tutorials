const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./dummy.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return;
    }

    let dummy = res;
    console.log(dummy);

    readFile('./dummyTwo.txt', 'utf-8', (err, res) => {
        if(err){
            console.log(err);
            return;
        }

        dummyTwo = res;
        console.log(dummyTwo);
        
        writeFile('./dummyThree.txt', `${dummy} and also ${dummyTwo}`, (err, res) => {
            if(err){
                console.log(err);
                return;
            }

            console.log('done with this task');
        })
    });
});

console.log('starting the next one');