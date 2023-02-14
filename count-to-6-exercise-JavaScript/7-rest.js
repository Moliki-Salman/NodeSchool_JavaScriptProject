module.exports = function average(...array) {

    var total = 0;
    var count = 0;

    array.forEach(function (item)  {
        total += item;
         
         count++;
    });

    return total / count;

 }

/*
Here is the official solution:
 module.exports = (...args) => {
        var sum = args.reduce((soFar, value) => soFar + value, 0);
        return sum / args.length;
    };
*/
