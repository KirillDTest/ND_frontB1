//http://www.codeabbey.com/index/task_view/array-counters--ru 

var forest = [1,2,3,2,3,1,1,1,1,3];
var trees=[1,2,3];


var f_counter = function(arr,m) {

var counter =[];                             //Обнуляем все счетчики в массиве
for (var c=0, cm=m.length; c<cm; c++) {
	counter[c]=0;
}

var i=0;                      //Начальное значение
while (i<=arr.length)
	{
	for (var l=0, d=m.length; l<d; l++)
			{
			  if (m[l]==arr[i])
				 counter[l]++;
			}
	i++;                      //Приращение
	}
	return counter;
}

console.log(f_counter(forest,trees));

