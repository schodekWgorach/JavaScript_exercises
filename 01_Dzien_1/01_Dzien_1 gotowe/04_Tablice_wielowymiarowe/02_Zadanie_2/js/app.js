function print2DArray(array2d) {
    array2d.forEach(function (innerArray) {
        innerArray.forEach(function (item) {
            console.log(item);
        })
    })
}

print2DArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);