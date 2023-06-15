console.log(`----------------------------------`);
function isPalindrome(str) {
    var reversedStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    } 
    if (reversedStr.toLowerCase() === str.toLowerCase()) {
     console.log(`"${str}" is Palindrome`);
     console.log(`----------------------------------`);
    } else {
      console.log(`"${str}" is Not Palindrome`);
      console.log(`----------------------------------`);
    }
  }
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");

