
// http://www.codeabbey.com/index/task_view/maximum-of-array--ru
var f_maximum = function(arr) {
	var currentMax = 0;
	var k=0;
	for (var i=0, j=arr.length; i<j; i++) {
		currentMax=arr[i];
			
		do { if (currentMax>=arr[k])    //на каждой итерации цикла проверяем не будет ли currentMax больше следующих в массиве
				{k++;                   //если да то k++
				 if (k==arr.length)     //достигли конца arr?
				 	return currentMax;  //если да то число currentMax является максимумо в массиве
				}
			 else {break;}              //если currentMax оказалось меньше следующего обрываем цикл do              
		}								//и записываем новое значение currentMax=arr[i];
										//при этом индекс к в начале do не обнуляем, т.к. нету смысла снова сравнивать с начала массива arr, мы начинаем сравнивать currentMax с того места arr[i] где нашли новое максимальное число в массиве 
		while (k<arr.length)
	}
}
console.log(f_maximum([1,2,3,4,5,20,100,190,6,7,8,40]));
