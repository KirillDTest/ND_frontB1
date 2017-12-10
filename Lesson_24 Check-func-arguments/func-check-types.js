


//http://www.codeabbey.com/index/task_view/sum-of-two--ru
var sum = function (a,b) {
	var summary=0;
	for (var i=0, j=arguments.length; i<j; i++) {
		if (typeof(arguments[i]) != 'number' || isNaN(arguments[i]) || arguments[i]==Infinity || arguments[i]==-Infinity) {
			return "Please check type of arguments"
		}
		else summary  = summary + arguments[i];
	}
	return summary;
}
console.log(sum(1, 2, 4));

//49.10 Lesson24	
// http://www.codeabbey.com/index/task_view/sum-in-loop
// ПЕРВЫЙ ВАРИАНТ программы,которая сначала проверяет все переменные массива на соответствие типам данных, и если находит хоть одну неподходящую переменную программа arrSum не выполняется вообще
// var arrSum = function(arr) {
// 	for (var l=0, d=arr.length; l<d; l++) {
// 		if (typeof(arr[l]) == 'number' && !isNaN(arr[l]) && arr[l]!=Infinity && arr[l]!=-Infinity)
// 			{}      //Если не указать даже пустое тело if, то выскочит ошибка
// 		else return "Array contains not a number!!!";  
// 	}
// 	var sum = 0;
// 	for (var i=0, j=arr.length; i<j; i++) {
// 		sum += arr[i];}
// 	return sum;
// }
// console.log(arrSum([10, 20, 30, 40, 5, 6, 7, 8]));


//ВТОРОЙ ВАРИАНТ проги выше, но если эта программа найдет среди аргументов (т.е. во входном массиве) неподходящую по типу переменную
//она ее пропускает и в сумму не включает (1.02.00, 1.07.50 Lesson24)
var arrSum = function(arr) {
	var sum = 0;
	for (var l=0, d=arr.length; l<d; l++) {
		if (typeof(arr[l]) == 'number' && !isNaN(arr[l]) &&arr[l]!=Infinity &&arr[l]!=-Infinity) {
			sum += arr[l];
		}
	}
	return arr=sum;
}
console.log(arrSum([10, 20, 's', 40, 5, 6, 7, 8]));


//UNIVERSAL FUNCTION
//1.14.45 Lesson 24
var Sums = function(a,b) {
	if (arguments.length==2) {    //!!!Если мы передаем в арг-ты ф-ии просто набор чисел (или данных), то мы делаем их массивом с пом. arguments b обрабатываем к примеру ф-ией sum (сложение двух чисел)
		return sum(a,b);
	}


	if (arguments.length>2) {     //Вариант программы, если в качестве аргументов в функцию Sums передается набор чисел и массивов
		for (var i=0, j=arguments.length; i<j; i++) {
			if (typeof(arguments[i])=="object") {
				arguments[i]=arrSum(arguments[i]);
			}
		}
		return arrSum(arguments); //мы передаем в функцию arguments,
								  //потому что arrSum работает с массивами, 
								  //т.е. то что в console.log(Sums(10, 20, 30, 40, 5, 6, 7, 8));
	}							  //arguments сделает его массивом (1.25.00 Lesson 24) и обработает ф-ией сложения чисел в массиве arrSum


	if (typeof(a)=='object') {     //!!!Если мы передаем в арг-ты ф-ии массив (его тип - object), то нет необходимости делать массив массивом с пом. arguments, поэтому обрабатываем ф-ией сложения чисел в массиве arrSum
		return arrSum(a);          //(поскольку массив является обьектом!!!!)
	} 


	return "Wrong arguments";
}

console.log(Sums([10,20,30], 40, 4, [1,2,3]));
// console.log(Sums(10, 20, 30, 40, "5", 6, 7, 8)); 
// console.log(Sums()); //1.29.50 Lesson24 arguments есть всегда, если аргументы внутрь ф-ии не передаются
//то массив arguments будет пустым (arguments.length==0). 

