let userArray = process.argv.slice(2);
let userObj = {};
[, userObj.username, userObj.email] = userArray;
console.log(userObj);
