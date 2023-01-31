const url = require('url');
const querystring = require('querystring');

const myUrl = new URL('https://www.example.com:3000/path?key=value#hash');
const query = myUrl.search.substr(1);
const queryParams = querystring.parse(query);

console.log(queryParams);  // { key: 'value' }
