
var k=0
var SortWithIndexes = function(arr){
    var index=[3,1,4,2]
    for( var i=0, l=arr.length; i<l; i++){
        if(arr[i+1]<arr[i]){
             var a = arr[i]
      var b = arr[i + 1]
      arr[i] = b
      arr[i + 1] = a
        k++;
        }
        
    }
   return index
    
}
console.log(SortWithIndexes([50, 98, 17, 79]))