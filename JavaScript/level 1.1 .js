
        var  arr = ['A','B','C','D','E','E','F','G','H','J','K','K','M'];
        function recur(arr){
            var char=[];
            for(i=0;i<arr.length;i++){
                for(j=i+1;j<arr.length;j++){
                    if(arr[i]==arr[j]){
                        char.push(arr[i]);
                        char.push(arr[j]);
                    }
                }

            }
            return char;
        }
        console.log(recur(arr));
   