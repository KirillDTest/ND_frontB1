// http://www.codeabbey.com/index/task_view/sort-with-indexes--ru

//////////////////////////////////////////////////////////////////////
//////////////////FIRST VARIANT //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var f_sort_indexes = function(arr) {
	var arrInd = [];
	for (var i=0, j=arr.length; i<j; i++) {    //Создаем многомерный массив, каждый элемент которого состоит
		arrInd[i]=[arr[i],i+1];				   //из 1-го элемента вх.массива arr и его индекса
		//console.log(arrInd[i]);
	}
	// console.log(arrInd);
	var counter;
	var temp;
	do {
		counter=0;
		for (var i=0, j=arr.length; i<j; i++) {  //сортируем массив с пом. метода bubbleSort
			if (arr[i]>arr[i+1]) {               //и с перестановкой чисел в массиве arr
				temp=arr[i+1];
				arr[i+1]=arr[i];
				arr[i]=temp;

				temp=arrInd[i+1];                //переставляем числа и в многомерном массиве
				arrInd[i+1]=arrInd[i];
				arrInd[i]=temp;

				counter++;
			}
		}
	}
	while (counter>0)
	var arrRes=[];
		for (var i=0, j=arr.length; i<j; i++) {   //извлекаем в новый массив индексы из отсортированного многомерного массива  
			arrRes[i]=arrInd[i][1];
		}

	return arrRes;
}
console.log("First variant");
console.log(f_sort_indexes([50, 98, 17, 79]));



//////////////////////////////////////////////////////////////////////
//////////////////SECOND VARIANT (KIRILL)/////////////////////////////
//////////////////////////////////////////////////////////////////////

var f_bubble_sort = function(arr) {
	do {counter=0;
		for (var i=0, j=arr.length; i<j; i++) {
			if (arr[i]>arr[i+1]) {
				temp=arr[i+1];
				arr[i+1]=arr[i];
				arr[i]=temp;
				counter++;
			}
		}
	}
	while (counter>0)
		return arr;
}

var f_sort_indexes = function(arr) {
	var counter;
	var temp;
	var arrRes=[];                                 //копируем arr в arrRes, 
	for (var i=0, j=arr.length; i<j; i++) {        //чтобы при bubbleSort массив не отсортировался одновременно с arrRes (почему, см.что такое ссылка)
		arrRes[i]=arr[i];
	}

	arrRes=f_bubble_sort(arrRes);                  //сортируем arrRes

	var index;
	var arrIndex=[];
	for (var i=0, j=arrRes.length; i<j; i++) {      //на каждой имитерации этого цикла берем i-e значение отсортированного массива arrRes
		index=1;
		for (var l=0, d=arr.length; l<d; l++) {     //на каждой имитерации этого цикла берем l-e значение  неотсортированного входного массива arr и сравниваем его с arrRes[i]
			if (arrRes[i]==arr[l])                  //если совпадение есть, то записываем номер индекса в новый массив (этот индекс это номер позиции arr[l])
				{arrIndex[i]=index;
				break;}
			index++;                                //если совпадений нет, то увеличиваем индекс в конце цикла
		}
	}
	return arrIndex;                //возвращаем массив индексов
}
console.log("Second variant");
console.log(f_sort_indexes([50, 98, 17, 79]));
