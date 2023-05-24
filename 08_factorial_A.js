function factorialOfNum(num)
{
    if( num == null || num == undefined || isNaN(num)){
        console.log(`You have Entered "${num}" is Invalid Data`);
        return;
    }
    var result = 1;                                          // fact= 1      // fact=6    //fact = 30  //fact = 120         // fact  = 360   //fact =720      //fact = 720
    for( var index = num; index >= 1; index--)              // index = 4    // index = 5 // index = 4 // index = 3         // index = 2     // index = 1     //index = 0 !>=1
    {
       result = result * index ;                       // fact = 1 * 6   // fact = 6* 5 //fact = 30*4   // fact = 120 * 3 //fact = 360 * 2 //fact = 720 *1  
    }
    console.log(`Factorial of ${num} is : ${result}`);
    return result;
}
console.log(`-------------------------------------------------------------------------`);
console.log(`              Find the Factorial of given input`);
console.log(`-------------------------------------------------------------------------`);
factorialOfNum(5);
console.log(`-------------------------------------------------------------------------`);
factorialOfNum(3);
console.log(`-------------------------------------------------------------------------`);
factorialOfNum(null);
console.log(`-------------------------------------------------------------------------`);
factorialOfNum(8);
console.log(`-------------------------------------------------------------------------`);
factorialOfNum();
console.log(`-------------------------------------------------------------------------`);
factorialOfNum(9);
console.log(`-------------------------------------------------------------------------`);
factorialOfNum(0);
console.log(`-------------------------------------------------------------------------`);
