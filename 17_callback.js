console.log(`---------Callback using named Function `);
// Avinash --
// function assignment(callbackFun){
//     console.log("Start: Assignments solving");
//     console.log("Took 3 hours");
//     console.log("Complete : Assignments solving ");
//     callbackFun();
// }
// // Mangesh
// function copyAssignment(){
//     console.log(`Start copying`);
//     console.log(`Took 15 mins to copy`);
//     console.log(`Complete assignments`);
// }

// assignment(copyAssignment);


// console.log(`---------Callback using Function Expression`);
// // Avinash --
// let doHomeWork = function(callback){
//     console.log("Start: Assignments solving");
//     console.log("Took 3 hours");
//     console.log("Complete : Assignments solving ");
//     callback();
// }
// // Mangesh
// let copyHomeWork = function(){
//     console.log(`Start copying`);
//     console.log(`Took 15 mins to copy`);
//     console.log(`Complete assignments`);
// }
// doHomeWork(copyHomeWork);

// var greet = function (platform) {
//     console.log("Welcome to ", platform);
// };
  
// greet("GeeksforGeeks!");



// function nikita (callback) {
//     console.log(`Nikita : Hi, handsome`);
//     console.log(`How are you !!!!`);
//     callbackFun();
//   }

// function nikitaBf () {
//     console.log(`Nikita : Hi, handsome`);
//     console.log(`How are you !!!!`);   
// }
// nikita(nikitaBf)
console.log(`=======Nikita Bf calling her gf like : ===========`);
function nikitaBf(callbackFun){
    console.log("Hey Nikita, ky krtey");
    console.log("majhi bag de mala");
    console.log("office jaychay");
    callbackFun();
}
function nikita(){
    console.log(`======in response nikita said =============`);
    console.log(`Ho ho aale`);
    console.log(`hi ghya tumchi bag`);
    console.log(`ani tiffin sudhha  `);
}
nikitaBf(nikita);
