"use strict";
const sumAll = function (intBegin, intEnd) {
    if (typeof (intBegin) != 'number' || typeof (intEnd) != 'number') {
        return "ERROR";
    }
    else if (intBegin < 0 || intEnd < 0) {
        return "ERROR";
    }
    else {
        //to iterate from the smaller number
        if (intBegin > intEnd) {
            let intBackup = intBegin;
            intBegin = intEnd;
            intEnd = intBackup;
            console.log(`${intBegin}, ${intEnd}`);
        }
        let totalSum = 0;
        while (intBegin <= intEnd) {
            totalSum += intBegin++;

        }
        return totalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
