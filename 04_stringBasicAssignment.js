console.log("------------------------Assignment 1------------------------------")
console.log("");
function stringBasic()
{
    var result="Tata Consultancy Serices"
    console.log("My dream company is =>" ,result);
}
stringBasic();

console.log("");
console.log("-----------------------------------------------------------------")
console.log("");

function show(hobbiesOne, hobbiesTwo,hobbiesThree )
{
    // Define variables
    var hobbiesOne = "Programming";
    var hobbiesTwo = "Travelling"
    var hobbiesThree = "Reading"
    console.log("My Hobbies are => ",hobbiesOne, hobbiesTwo, hobbiesThree);                 // Log hobbies on the console
    console.log("");
    var totalCharacters = hobbiesOne.length + hobbiesTwo.length + hobbiesThree.length;      // Calculate the total number of characters
    console.log("Total Numbers of Characters are : =>", totalCharacters);                   // Log the total number of characters on the console
}
show();
console.log("------------------------------------------------------------------")
console.log("                          Assignment 2                            ");
console.log("------------------------------------------------------------------")
console.log("");
function stringHandsOn(){
    var givenString = "   Hey you are doing good, keep it up   ";
    console.log("1. Given String as it is => ",givenString);
    console.log("2. Total Length of the Given String is =>", givenString.length)

    var trimLeadingAndTrailingSpaces=givenString.trimStart().trimEnd();
    console.log("3. After remove Leading and Trailing Extra Spaces Lenth is => ",trimLeadingAndTrailingSpaces.length);

    var abc = givenString.length -trimLeadingAndTrailingSpaces.length;
    console.log("4. Total Number of Removed Extra Space Count are => ", abc);

    var firstCharacter = trimLeadingAndTrailingSpaces.charAt(0);
    var lastCharacter = trimLeadingAndTrailingSpaces.charAt(trimLeadingAndTrailingSpaces.length-1);
    console.log("5. First and Last charcter of given string after remove extra spaces =>", firstCharacter, lastCharacter);
}
stringHandsOn();