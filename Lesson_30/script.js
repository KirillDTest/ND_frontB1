function palindromes(str){
var re = /[^A-Z0-9]/ig;

var remove = str.replace(re, "").toLowerCase();
    
var check = remove.split('').reverse().join('');
    
if(remove == check)  {
  console.log("Y");
}   
else  {
  console.log("N");
    }
}
palindromes('Stars');
palindromes('O, a kak Uwakov lil vo kawu kakao!');
palindromes('Some men interpret nine memos');