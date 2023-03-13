module.exports = (prop, times) => {
    var aString = "!";
    if (times !== undefined) {
        return(`${prop}${aString.repeat(times)}`);
    }
    else{
        return(`${prop}${aString.repeat(prop.length)}`);

    }
};

/* official solution
module.exports =
        (string, bangs = string.length) => string + "!".repeat(bangs);
*/ 
