// 0  1   1   2   3   5   8   13   21
function fibbo(num) {
 let n1 = 0;
 let n2 = 1;
 let sum;
 console.log(`First 10 Fibonacci Series Numbers : `);
 for (let index = 0; index <= num ; index++) {  // index  =2    // ndex = 3
    console.log(n1);            //0             // n1 = 1       // n1= 1
    sum = n1 + n2;              //1 = 0 + 1     // 2 = 1+1      // 3 = 1+2
    n1 = n2;                    // n1 = 1       // n1 =1        // n1 = 2
    n2 = sum;                   // n2 = 1       // n2 =2        // n2 = 3
 }
}
fibbo(10);
