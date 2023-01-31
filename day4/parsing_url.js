const url = require('url');
const myUrl = new URL('https://www.example.com:3000/path?key=value#hash');

console.log(myUrl.protocol);  // https:
console.log(myUrl.host);      // www.example.com:3000
console.log(myUrl.hostname);  // www.example.com
console.log(myUrl.port);      // 3000
console.log(myUrl.pathname);  // /path
console.log(myUrl.search);    // ?key=value
console.log(myUrl.hash);      // #hash
