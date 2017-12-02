var input = [32.6, 31.2, 35.2, 37.4, 44.9, 42.1, 44.1];





function f_meteo(arr) {
	var arrFinal = [];
		arrFinal = input;
	var average=0;
	for (var i=1, j=arr.length-1; i<j; i++)
		{
			arrFinal[i] = Math.round(((arr[i] + arr[i-1] + arr[i+1])/3), 1e-7);
		}

	return arrFinal;
}






console.log(f_meteo(input));