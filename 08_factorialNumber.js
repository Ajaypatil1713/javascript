function factNumber(n) {
  var fact=1;
  for (var index = n; index > 0; index--) {
     fact = fact * index;
  }
  console.log(`Factorial of  ${n} is : ${fact}`);
}
factNumber(10);
//Output :=> Factorial of  10 is : 3628800