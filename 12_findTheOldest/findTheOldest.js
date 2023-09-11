const findTheOldest = function (person) {
    let oldest = 0;
    for (let i = 0; i < person.length; i++) {
        const age = person[i].yearOfDeath === undefined ?
            new Date().getFullYear() - person[i].yearOfBirth :
            person[i].yearOfDeath - person[i].yearOfBirth;
        const ageOldest = person[oldest].yearOfDeath === undefined ?
            new Date().getFullYear() - person[oldest].yearOfBirth :
            person[oldest].yearOfDeath - person[oldest].yearOfBirth;

        if (age > ageOldest)
            oldest = i;

    }
    return person[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
