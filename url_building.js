// 5.5 original Twitter setup

var url = require('url');

options = {
    protocol: "http:",
    host: 'search.twitter.com',
    pathname: '/search.json',
    query: {q: 'codeschool'}
};

var searchURL = url.format(options);
console.log(searchURL);
