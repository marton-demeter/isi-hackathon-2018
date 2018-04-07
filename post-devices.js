const rp = require('request-promise');

let example = require('./example.json');
console.log(example);

rp({
  method: 'POST',
  url: 'http://localhost:8080/api/post',
  body: {
    packets: example
  },
  json: true
})
.then(response => {
  console.log('posted');
})
.catch(error => {
  console.log(error.message);
})