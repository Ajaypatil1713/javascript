
// for(let index = 0; index<=10 ; index++)
// {
//     console.log(`${index}`);
//     if(index == 5)
//     {
//         break;
//     }
// }
// console.log(`End loop`);

iterator = 0;
for(let index = 1 ; index <=10 ; index ++)
{
    iterator =iterator+1;
    console.log(`Iterator Start: ${iterator}`);
    console.log(`${index}`);
    if(index==5)
    {
        // console.log(`hi`);
        continue;       
    }
    console.log(`Iterator End ${iterator}`);
}
console.log(`Loop End`);
