// http://www.codeabbey.com/index/task_view/neumanns-random-generator--ru

// Кирилл:
// 1. Проверяем наше получившееся число с теми элементами,
//    которые есть в массиве результатов. Если есть совпадения,
//    возвращаем индекс числа в массиве результатов.
// 2. Добавляем наше число в массив результатов
// 3. Генерируем число и возвращемся в п.1
//    массив результатов у нас не пустой, а сразу хранит
//    в себе значение числа, которые мы передали при вызове функции

var f_Neuman = function(input) {
	var res=[];
	res[res.length]=input;
	var count=0;
	var temp=input;
	var str;
	
	do {count++;
		temp=temp*temp;
		str=temp.toString();
		if (str.length<8) {
				do {
				str="0" + str;}
				while (str.length<8)
			}
			
			str=str.slice(2,6);
			temp=parseInt(str);
			
		for (var i=0; i<res.length; i++) {
			if (temp==res[i])
				return count;
		}
			res[res.length]=temp;
			// console.log(res);
	}
	while (temp!=input)
return count;
}
console.log(f_Neuman(0001));
console.log(f_Neuman(4100));
console.log(f_Neuman(5761));