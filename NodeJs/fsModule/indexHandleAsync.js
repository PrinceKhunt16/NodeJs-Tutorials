const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

console.log('start');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

const dummy = getText('./dummy.txt')
    .then((result) => {
        console.log(result + "with Promise")
    })
    .catch((err) => {
        console.log(err);
    });

dummy.then(() => {
    getText('./dummyTwo.txt')
        .then((result) => {
            console.log(result + "with Promise")
        })
        .catch((err) => {
            console.log(err);
        });
});

const func = async () => {
  try {
    const data = await readFilePromise('./dummy.txt', 'utf-8');
    await writeFilePromise('./dummyThree.txt', data)
    console.log(data);
  } catch(err){
    console.log(err);
  }
}

func();

console.log('starting the next one');