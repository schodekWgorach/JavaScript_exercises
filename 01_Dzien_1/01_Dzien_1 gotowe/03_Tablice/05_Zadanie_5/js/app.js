function multiply(someArray) {
    const multiplyResult = someArray.reduce(function (a, b) {
        return a * b;
    });
    console.log(multiplyResult);
}

multiply([1,2,3,4,5,6,7]);