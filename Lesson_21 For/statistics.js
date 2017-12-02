var input = [[2,3,7,0], [20,10,0], [1,0]];





function f_stat(array) {
	var arrStat = [];
	var average;

	for (var i=0, j=array.length; i<j; i++)
		{
			average=0;
			for (var d=0, l=array[i].length-1; d<l; d++)
				{
					average= average + array[i][d];
				}
			arrStat[i] = average/l;
		}
	return arrStat;
}





console.log(f_stat(input));