// const arrayName = [11,22,33,44,55,66]
// arrayName.push(88);
// for (const element of arrayName) {
//  console.log(element);   
// }

// How to get selected elements from  array?
// const arrayName = [11,22,33,44,55,66]
// const abc = arrayName.slice(1,4);
// for (const element of abc) {
//      console.log(element);   
// }

// Remove Elements  from startIndex to end
	// const arrayName = [11,22,33,44,55,66]
	// const array1 = arrayName.splice(0);
	// for(const element of arrayName){
	// console.log(array1); 
    // }

    // const arrayName = [11,22,33,44,55,66]
	// const array1 = arrayName.splice(1,4);
	// for(const element of arrayName){
	// console.log(array1); 
    // }

    // const arrayName = [11,22,33,44,55,66]
	// const array1 = arrayName.splice(1,1,99);
	// for(const element of arrayName){
	// console.log(element); 
    // // }

    // const arrayName = [11,22,33,44,55,66]
    // arrayName.reverse();
    // console.log(arrayName);

    // const abc = arrayName.includes(33);
    // console.log(abc);

    // const setName = new Set();
    // setName.add(10);
    // setName.add(20);
    // setName.add(30);
    // // console.log(setName.clear());
    // setName.add(40);
    // console.log(setName);
    // // setName.delete(10);
    // console.log(setName.has(10));
    // console.log(setName);


    // // travers set
    // for (const element of setName) {
    //     console.log(element);        
    // }

    const mapName = new Map();
    mapName.set(10,"Ten");
    mapName.set(20,"Twenty");
    mapName.set(30,"Thirty");
    mapName.set(40,"Forty");
    mapName.set(50,"Fifty");
    // mapName.set(60,"Forty");

    // console.log(mapName.delete(30));
    // const abc = mapName.has(30);
    // console.log(abc);
    // console.log(mapName);
    for (const element of mapName) {
        console.log(element);
    }

    