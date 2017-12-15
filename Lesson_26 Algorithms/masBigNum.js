
// http://www.codeabbey.com/index/task_view/maximum-of-array--ru
var f_maximum = function(arr) {
	var currentMax = 0;
	var k=0;
	for (var i=0, j=arr.length; i<j; i++) {
		currentMax=arr[i];
			
		do { if (currentMax>=arr[k])
				{k++;
				 if (k==arr.length)
				 	return currentMax;
				}
			 else {break;}
		}
		while (k<arr.length)
	}
}
console.log(f_maximum([1,2,3,4,5,20,100,190,6,7,8,40]));
