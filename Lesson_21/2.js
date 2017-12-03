var avg = function(arr) {
    var sum = [];
    for(var i=0, j=arr.length-6; i<j; i++) {
        sum[i] = (arr[0]);
    }
    for(var i=1, j=arr.length-5; i<j; i++) {
        sum[i] = (arr[0]+arr[1]+arr[2])/3;
    }
    for(var i=2, j=arr.length-4; i<j; i++) {
        sum[i] = (arr[1]+arr[2]+arr[3])/3;
    }
    for(var i=3, j=arr.length-3; i<j; i++) {
        sum[i] = (arr[2]+arr[3]+arr[4])/3;
    }
    for(var i=4, j=arr.length-2; i<j; i++) {
        sum[i] = (arr[3]+arr[4]+arr[5])/3;
    }
    for(var i=5, j=arr.length-1; i<j; i++) {
        sum[i] = ((arr[4]+arr[5]+arr[6])/3);
    }
    for(var i=6, j=arr.length; i<j; i++) {
        sum[i] = (arr[6]);
    }
    
    return sum;
}

console.log(avg([32.6,31.2,35.2,37.4,44.9,42.1,44.1]));