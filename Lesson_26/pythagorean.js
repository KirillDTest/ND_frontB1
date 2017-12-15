var PythagoreanTheorem = (a,b,c) => {
    if ((c*c) == (a*a) + (b*b)) {
        return 'right';
    }
    if ((c*c) < (a*a) + (b*b)) {
        return 'acute';
    }
    if ((c*c) > (a*a) + (b*b)) {
        return 'obtuse';
    }
}
console.log(PythagoreanTheorem(6,8,9));
console.log(PythagoreanTheorem(9,12,15));
console.log(PythagoreanTheorem(16,12,22));