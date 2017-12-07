var ArrayCounters = function(forest,trees) {

var counter = [];    
    
for (var x=0, y=trees.length; x<y; x++) {
	counter[x] = 0;
}

var i=0;                     
while (i<=forest.length)
	{
	for (var k=0, h=trees.length; k<h; k++)
			{
			  if (trees[k]==forest[i])
				 counter[k]++;
        }
	i++;                     
}
	return counter;
}

console.log(ArrayCounters([1,2,3,2,3,1,1,1,1,3],[1,2,3]));
