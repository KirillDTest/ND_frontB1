var avg = function(arr) {
    var sum = [];
    for(var i=0, j=arr.length-2; i<j; i++) {
        sum[i] = (arr[0][0]+arr[0][1]+arr[0][2])/3;
    }
    for(var i=1, j=arr.length-1; i<j; i++) {
        sum[i] = (arr[1][0]+arr[1][1])/2;
    }
    for(var i=2, j=arr.length; i<j; i++) {
        sum[i] = (arr[2][0]);
    }
    
    return sum;
}

console.log(avg([[2,3,7],[20,10],[1]]));