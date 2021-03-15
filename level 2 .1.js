var ary = [1,[2,[3,[4,5]]],6];
function even (arr){
    return arr.flat(Infinity);
}

even(ary);
console.log(even(ary));