// default import
//import myVar from "./utils.js";
// console.log(myVar);

// named import
//import { apiKey, author } from "./utils.js";
// console.log(apiKey, author);

// mixed import
import * as utils from "./utils.js";
console.log(utils.default);

//  let x = (str) => alert('kaboom ' + str);
//  x(utils.apiKey);