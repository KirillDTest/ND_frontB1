var f_triangle = function(a,b,c) {
	// Сумма длин двух меньших сторон
	// должна быть больше длины большей третьей

	if (a+b>=c) {
		return 1;
	}
	else return 0;
}

console.log(f_triangle(1,2,5));