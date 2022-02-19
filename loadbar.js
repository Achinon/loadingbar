const loadbar = require('./classes/bar');

const bar = loadbar.create('Test loader');

console.log(bar.invokeCount = 1)