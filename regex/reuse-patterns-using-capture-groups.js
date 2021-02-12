let repeatNum = "42 42 42";
/**
 * () - each bracket is a group and can be identified by respective number \n of the group
 * example
 *  (a)(b)(c)\1\2\3
 * 
 * if we want to repeat the group the use the corresponding number of the group
 * 
 */
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);