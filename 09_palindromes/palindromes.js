const palindromes = function (string) {
    let lettersString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return lettersString.split("").reverse().join("") == lettersString;
};

// Do not edit below this line
module.exports = palindromes;
