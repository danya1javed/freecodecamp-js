let username = "JackOfAllTrades";
/**
 * two cases created one to deal with problem of having digit in 2 charaters long username
 */
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]+\d\d+$/i; // Change this line
let result = userCheck.test(username);