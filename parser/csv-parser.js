module.exports = {
  csvParser: file => {
    const readline = require('readline');
    const fs = require('fs');
    const path = require('path');

    const rl = readline.createInterface({
      input: fs.createReadStream(path.join(__dirname, 'data.csv')),
      crlfDelay: Infinity
    });
    rl.on('close', () => {
      console.log('done');
    })
    rl.on('line', (line) => {
      let packet = {
        date: line.split(',')[0],
        time: line.split(',')[1],
        src_mac: line.split(',')[2],
        src_ip: line.split(',')[3],
        src_port: line.split(',')[4],
        dst_mac: line.split(',')[5],
        dst_ip: line.split(',')[6],
        dst_port: line.split(',')[7],
        protocol: line.split(',')[8],
        good: line.split(',')[9],
        allow: line.split(',')[10],
      }
      console.log(packet);
    });
  }
}