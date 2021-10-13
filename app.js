const load = require('lodash');

const items = [1, [2, [3, [4]]]]
const newI  = load.flattenDeep(items);

console.log(newI)