//////////////////////////////////////////////////////////////////////////////////////////
/////////////VARIANT1 ////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
var f_polindrome = function(str) {
	var forward=[];
	var reverse=[];

	str=str.toLowerCase();   //приводим все символы к нижнему регистру
	str=str.split(/\W/g);    //возвращаем массив, который получится в результате выбрасывания из строки "не латинской буквы, не цифры и не знака подчеркивания" (см.регулярное выражение \W)
	str=str.join("");        //поскольку предыдущая операцию вернет массив слов, обьединяем все в единую строку (которая является уже нужным нам массивом букв без лишних символов и разделителей)
	// console.log(str);
	// console.log(typeof(str));

	for (var i=0, j=str.length, c=str.length-1; i<j; i++, c--) {
		forward[i]=str[i];          //читаем с начала
		reverse[i]=str[c];          //читаем с конца
		if (forward[i]==reverse[i]) //сравниваем первый символ с последним
			{}                      //(другими словами читаем строку наоборот)
		else return "N";            //если появляется несовпадение сразу возвращаем No
	}
	console.log(forward);           //строка прочитанная с первого символа
	console.log(reverse);           //строка прочитанная с последнего символа

return "Y";
}
console.log(f_polindrome("Stars"));
console.log(f_polindrome("O, a kak Uwakov lil vo kawu kakao!"));
console.log(f_polindrome("Some men interpret nine memos"));


//////////////////////////////////////////////////////////////////////////////////////////
/////////////VARIANT2 (KIRIL) ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// Сравнение можно упростить до if(forward==reverse)
// Строки сравниваются посимвольно самим джаваскриптом
// Точно так же, как в коде VARIANT 1
// Когда мы сравниваем две строки, js сравнивает первые символы в двух строках. Потом вторые символы, потом третьи и т.д. 
// Сравнивает до тех пор, пока не пройдёт по строкам полностью, либо при сравнении символов на одинаковом индексе получим значение false
// 'abcd' == 'abdc'

// 'a'=='a' // true
// 'b'=='b'// true
// 'c'=='d'//false

// как итог:
// false

// вот наглядней пример:
// 'a' == 'ab'
// 'a'=='a' //true
// undefined=='b' //false
// 'a'=='ab' // false

var f_polindrome = function(str) {
	var forward=[];
	var reverse=[];
	str=str.toLowerCase();   //приводим все символы к нижнему регистру
	str=str.split(/\W/g);    //возвращаем массив, который получится в результате выбрасывания из строки "не латинской буквы, не цифры и не знака подчеркивания" (см.регулярное выражение \W)
	str=str.join("");        //поскольку предыдущая операцию вернет массив слов, обьединяем все в единую строку (которая является уже нужным нам массивом букв без лишних символов и разделителей)

	for (var i=0, j=str.length, c=str.length-1; i<j; i++, c--) {
		forward[i]=str[i];          //читаем с начала
		reverse[i]=str[c];          //читаем с конца
	}
	if (forward==reverse) //сравниваем первый символ с последним
		return "Y";       //(другими словами читаем строку наоборот)
		else return "N";  //если появляется несовпадение сразу возвращаем No
}
console.log(f_polindrome("Stars"));
console.log(f_polindrome("O, a kak Uwakov lil vo kawu kakao!"));
console.log(f_polindrome("Some men interpret nine memos"));