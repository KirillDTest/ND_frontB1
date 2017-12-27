function josephusProblem(arr) {
    for (var i=0;i<=arr.length;i++) {
        if(i % 3 == 0 || 14 % i == 0 || i % 8 == 0 || i % 5 == 0) {
            continue;
        }
        console.log( i );
    }
}

josephusProblem([1,2,3,4,5,6,7,8,9,10]);