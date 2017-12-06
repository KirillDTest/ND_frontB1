//http://www.codeabbey.com/index/task_view/array-counters--ru 

var forest = [1,2,3,2,3,1,1,1,1,3];
var trees=[1,2,3];



var f_counter = function(arr,m) {

var counter =[0,0,0];
for (var i=0, j=arr.length; i<j; i++)
	{
		for (var l=0, d=m.length; l<d; l++)
			{
			  if (m[l]==arr[i])
				 counter[l]=counter[l]+1;
			}
	}
	return counter;
}

console.log(f_counter(forest,trees));






