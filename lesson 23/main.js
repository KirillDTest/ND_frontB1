var sumOfTwo = function(a,b){
	console.log(arguments);
	for(var i=0, j=arguments.length; i<j; i++){
		if(typeof(arguments[i]) != 'number' || isNaN(arguments[i]) ||
	 		arguments[i]==Infinity || arguments[i]==-Infinity || arguments.length != 2){
				return 'Please type arguments with type number';
			}
	}
	return a+b;
}

console.log(sumOfTwo(10,20));
var sumInLoop = function(arr){
	var sum =0;
	for(var i =0, j = arr.length; i<j; i++){
		if(typeof(arr[i]) == 'number' && !isNaN(arr[i]) && arr[i]!= Infinity && arr[i]!=-Infinity){
			sum+=arr[i];
			// sum=sum+arr[i];
		}
	}
	return sum
}

var bigSums = function(){
    sum=0
for(var i =0, j = arguments; i<j; i++){
    if(typeof(arguments[i])=='object')
        {
            sum+=sumInLoop(arguments[i])
        }
    if(typeof(arguments[i])=='number')
        {
            sum+=sumOfTwo(sum, arguments[i]);
        }
}
    return sum;
}


console.log(bigSums([20,10],[20,50],50,50[10,10]))


 