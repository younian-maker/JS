var ary = [1,[2,[3,[4,5]]],6];
  let arrMax=[];
function even (arr){
  
   for(let i=0 ; arr.length ; i++){
       if(Array.isArray(arr[i])){
         even(arr[i])
       }
    else{
        arrMax.push(arr[i])
    }
   }
}

even(ary);
console.log(arrMax);