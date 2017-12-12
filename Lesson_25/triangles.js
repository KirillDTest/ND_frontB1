var triangles = (a,b,c) => {
    if ((a*a) + (b*b) == (c*c)) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(triangles(3,4,5));

var triangles2 = (a,b,c) => {
    if ((a*a) + (b*b) == (c*c)) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(triangles2(1,2,4));