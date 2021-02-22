       var str = "today is a happy day";
        function change(str){
            var newarr = str.toLowerCase().split(" ");
 
	for (var i = 0; i < newarr.length; i++) {
		var char = newarr[i].charAt(0);
		newarr[i] = newarr[i].replace(char, function replace(char) {
			return char.toUpperCase();
		});
	}
	return newarr.join(" ");
    }
        console.log(change(str));
 