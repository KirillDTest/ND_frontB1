function isPalindrome(str) {
    var re = /[^A-Z0-9]/ig;
    var strLen = str.replace(re,"").toLowerCase();
      var  strReverse = strLen.split('').reverse().join('');
     if (strReverse == strLen) {
      return 'y';
    } 
    else {
      return 'n';
    }
    
  }
test= isPalindrome('Stars');
test2=isPalindrome('O, a kak Uwakov lil vo kawu kakao!');
test3=isPalindrome('Some men interpret nine memos')
  console.log(test)
console.log(test2)
console.log(test3)

