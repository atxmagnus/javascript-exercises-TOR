"use strict";
const leapYears = function (year) {
    //must be divisable by four
    //can not be divisable by 100
    //but can be divisable by 400
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
