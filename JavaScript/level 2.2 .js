var arr = [[1,2],[3,4],[6,7,9,[11,12,[12,13,[14]]]],10];
function even(arr) {
    return arr.flat(Infinity);
}
even(arr);
console.log(even(arr));