
var f_recursion_arr=function(arr,i) {
	if (i<=0) {
		return false;
	}
	else {
		if (arr[i]<arr[i-1]) {
			temp=arr[i-1];
			arr[i-1]=arr[i];
			arr[i]=temp;
			return f_recursion_arr(arr,i-1);
		}
		else {return f_recursion_arr(arr,i-1);}
	}
}

var f_bubbleSort=function(arr) {

	var i=arr.length;
	f_recursion_arr(arr, i);
	return arr;
}

console.log(f_bubbleSort([1, 4, 3, 2, 6, 5, -1]));


///////////////////////////////////////
//////////////VARIANT KIRILL///////////
///////////////////////////////////////
// var bubbleInArray(arr,i) {
// 	i++;
// 	if (i>=arr.length) {return arr;}
// 	if (arr[i]>arr[i+1]) {
// 		var temp=arr[i];
// 			arr[i]=arr[i+1];
// 			arr[i+1]=temp;
// 	}
// 	return bubbleInArray(arr,i);
// }