// http://www.codeabbey.com/index/task_view/sort-with-indexes--ru
var f_sort_indexes = function(arr) {
	var arrInd = [];
	for (var i=0, j=arr.length; i<j; i++) {
		arrInd[i]=[arr[i],i+1];
		console.log(arrInd[i]);
	}
	// console.log(arrInd);
	var counter;
	var temp;
	do {
		counter=0;
		for (var i=0, j=arr.length; i<j; i++) {
			if (arr[i]>arr[i+1]) {
				temp=arr[i+1];
				arr[i+1]=arr[i];
				arr[i]=temp;

				temp=arrInd[i+1];
				arrInd[i+1]=arrInd[i];
				arrInd[i]=temp;

				counter++;
			}
		}
	}
	while (counter>0)
	var arrRes=[];
		for (var i=0, j=arr.length; i<j; i++) {
			arrRes[i]=arrInd[i][1];
		}

	return arrRes;
}

console.log(f_sort_indexes([50, 98, 17, 79]));