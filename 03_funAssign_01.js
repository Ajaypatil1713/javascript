console.log("/------------------Funtion display------------------/");
console.log("-----------------------------------------------------/");
//First Function

function display() {
  console.log("First Function With No Argument and no Return type");
}
display();

//Second Function
function show() {
  console.log("Second funcion with no arguments and no return type");
}
show();

console.log("");
console.log("/---------------Funtion personDetails---------------/");
console.log("/-----------------------------------------------------/");
//Third Function
function personDetails(firstName, lastName, collegeName) {
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("College Name:", collegeName);
}
personDetails("Ajay", "Patil", "D.N.Clg");

console.log("");
console.log("/---------------Funtion swapVariableDude-------------/");
console.log("/-----------------------------------------------------/");
//Firth Function
function swapVariableDude(a, b) {
  console.log("Before Swap: a =", a, "b =", b);

  // Swapping the values of a and b
  let temp = a;
  a = b;
  b = temp;

  console.log("After Swap: a =", a, "b =", b);
}

// Example usage
swapVariableDude("virat", "anushka");
swapVariableDude(1000, 2000);

console.log("");
console.log("/------------------Funtion addThreeValues------------/");
console.log("/-----------------------------------------------------/");
//Fifth function
function addThreeValues(a, b, c) {
  return a + b + c;
}

// Example usage
console.log(addThreeValues(10.23, 600, 40));
console.log(addThreeValues("Hello", "Good", "Mornings"));
console.log("/-----------------------------------------------/");
console.log("/------------------------*-----------------------/");
