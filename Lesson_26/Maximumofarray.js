var max = 190;
var min = 1;
var maximumOfArr = function(arr) {
    for(var i=0,k=arr.length;i<k;i++) {
        if (arr[i] == max) {
            return max;
        }
    }
    for(var i=0,k=arr.length;i<k;i++) {
        if (arr[i] == min) {
            return min;
        }
    }
}
console.log(maximumOfArr([1,2,3,4,5,20,100,190,6,7,8,40]));
max = null;
console.log(maximumOfArr([1,2,3,4,5,20,100,190,6,7,8,40]));
