var encrypt = function(number,key) {
	crypt=(number-key/2)*3*5*7*107;
	return crypt;
}

var decrypt = function(number,key) {
	return	(number/107/7/5/3)+key/2;
}
console.log(encrypt(20,48));

var numberofecrypt=encrypt(20,48);
console.log(decrypt(numberofecrypt,48));