var fruit = process.argv.slice(2); 
var newFruit = fruit.map(string => string[0]);
console.log(`[${process.argv.slice(2)}] becomes "${newFruit.join('')}"`);

/* official solution
  var inputs = process.argv.slice(2);
    var result = inputs.map(s => s[0])
                       .reduce((soFar, s) => soFar + s);
    
    console.log(`[${inputs}] becomes "${result}"`);
    
*/
