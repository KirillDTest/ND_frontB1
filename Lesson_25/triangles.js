var triangles = (a,b,c) => {
    if ((a*a) + (b*b) == (c*c)) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(triangles(3,4,5));
console.log(triangles(1,2,4));