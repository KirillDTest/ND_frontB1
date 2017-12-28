// http://www.codeabbey.com/index/task_view/josephus-problem--ru

//////////////////////////////////////////////////////////////////
///////////////////////VARIANT1///////////////////////////////////
//////////////////////////////////////////////////////////////////
var f_Flavij = function(ammount, k) {
	var arr=[];                        //создаем массив людей по их количеству ammount
	for (var i=1; i<=ammount; i++) {
		arr[i-1]=i;
	}

	count=1;                           //этот счетчик никогда не обняляется
	i=0;
	do {
		if (count%k==0) {              //чтобы искать каждого k-ого, счетчик count%k
			arr.splice(i,1);		   //удаляем каждого k-го если остаток от деления =0
			// console.log(arr);
			i--;                       //поскольку после удаления массив сдвинулся на 1 то чтобы не пропустить элемент счетчик уменьшаем на 1 удаленного
		}
		if (i==arr.length-1)           //проверяем дошли до конца массива?
			{i=0;}					   //если да, то обнуляем счетчик і
		else
			{i++;}                     
		count++;                       //увеличиваем общий счетчик
	}

	while (arr.length>1)               //если в массиве останется один элемент, do while завершается
	return arr;                        //возвращаем результирующий массив
}

console.log(f_Flavij(10,3));


//////////////////////////////////////////////////////////////////
///////////////////////VARIANT2 (RECURSION)///////////////////////
//////////////////////////////////////////////////////////////////
// var f_Flavij = function(ammount,k) {
// 	var arr=[];
// 	for (var i=1; i<=ammount; i++) {
// 		arr[i-1]=i;
// 	}
// 	var count=1;
// 	var f_rec = function(arr,count) {
// 		for (var i=0; i<arr.length; i++) {
// 			if (count%k==0) {
// 				arr.splice(i,1);
// 				// console.log(arr);
// 				i--;
// 			}
// 			count++;
// 		}
// 		if (arr.length>1) {return f_rec(arr,count);}
// 		else {return arr;}	
// 	}
// 	return f_rec(arr,count);
// }
// console.log(f_Flavij(10,3));