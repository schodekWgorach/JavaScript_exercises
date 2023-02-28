function getEvenAverage(someArray) {
    // v1 - .forEach()
    // const evenArray = [];
    // someArray.forEach(function (item) {
    //    if (item % 2 === 0) {
    //        console.log(`Parzysta liczba: ${item}`);
    //        evenArray.push(item);
    //    }
    // });

    // v2 - .filter()
    const evenArray = someArray.filter(function (item) {
        return item % 2 === 0;
    });

    if (evenArray.length === 0) {
        return null;
    } else {
        const evenArraySum = evenArray.reduce(function (a, b) {
            return a + b;
        });
        const evenArrayLength = evenArray.length;
        const evenArrayAverage = evenArraySum / evenArrayLength;
        return evenArrayAverage;
    }
}

console.log(getEvenAverage([1,2,3,4,5,6,7]));
console.log(getEvenAverage([1,1,1,1]));