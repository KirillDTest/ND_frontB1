 var i=0
var rekursiaOfBubble = function(arr){ 
    var j=arr.length
    i++;
    if(i==j){
        return arr
    }
    if (arr[i]>arr[i+1]){ 
       var t=arr[i];
     arr[i]=arr[i+1];
     arr[i+1]=t;
    }
         return rekursiaOfBubble(arr) 
}
console.log(rekursiaOfBubble([1, 4, 3, 2, 6, 5, -1]))


