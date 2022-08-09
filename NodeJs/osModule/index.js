const os = require('os');

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus(),
    hostname: os.hostname(),
    networkInterfaces: os.networkInterfaces(),
    tmpdir: os.tmpdir(),
    userInfo: os.userInfo(),
    
}

console.log(currentOs);