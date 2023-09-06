const fibonacci = function (number) {
    if (number < 0) return "OOPS";
    let previous1 = 1;
    let previous2 = 0;
    let actual;
    for (let i = 2; i <= number; i++) {
        actual = previous1 + previous2;
        previous2 = previous1;
        previous1 = actual;
    }
    return previous1 + previous2;

};

// Do not edit below this line
module.exports = fibonacci;
