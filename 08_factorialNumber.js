function factNumber(n) 
{
  fact=1;
  for (var index = n; index > 0; index--) 
  {
    var fact = fact * index;
    console.log(`Factorial of ${index} is : ${fact}`);
  }
  console.log(`Factorial of  is : ${fact}`);
}
factNumber(10);