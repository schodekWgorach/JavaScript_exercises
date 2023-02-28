function sortArray(array) {
    const sortedArray = array.sort(function (a, b) {
        return a - b;
    });
    return sortedArray;
}

console.log(sortArray([145,11,3,64,4,6,10]));