
///////////////////////////////////////////////////
// Lesson 22 2.20.  Посмотреть обязательно!!!!/////
///////////////////////////////////////////////////

var input = [32.6, 31.2, 35.2, 37.4, 44.9, 42.1, 44.1];


function f_meteo(arr) {
	var arrFinal = [];
		// arrFinal = arr.slice(0);

	for (var i=0, j=arr.length; i<j; i++)
		{arrFinal[i]=arr[i];}
	
	
	for (var i=1, j=arrFinal.length-1; i<j; i++)
		{
			arrFinal[i] = ((arr[i] + arr[i-1] + arr[i+1])/3);
		}

	return arrFinal;
}


console.log(f_meteo(input));







