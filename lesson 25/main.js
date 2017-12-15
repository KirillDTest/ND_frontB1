var Triangles= function(a,b,c){
    if(c<=a+b){
        if(b<=a+c){
            if(a<=b+c){
                return true
            }
            else {
                return false
            }
        }
        else{
            return false
        }   
}
    else{
        return false
    }
}
console.log(Triangles(1,2,4))
console.log(Triangles(3,4,5))