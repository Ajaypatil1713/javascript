
var stringHandsOn = function(){
    var givenString ="   Hey you are doing good, keep it up   ";
    console.log(`      1. Given String is  => ${givenString}`);
    console.log(`      2. Length of String is : ${givenString.length}`);

    var trimLeadingAndTrailingSpaces = givenString.trimStart().trimEnd();
    console.log(`      3. After removing leading and trailing extra spaces : ${trimLeadingAndTrailingSpaces}`);
    console.log(`         Length of string After removing extra spaces:  ${trimLeadingAndTrailingSpaces.length}`);

    var numExtraSpaceRemoved = givenString.length-trimLeadingAndTrailingSpaces.length;
    console.log(`      4. Total number of extra spaces that is removed in : ${numExtraSpaceRemoved}`);

    var firstCharacter = trimLeadingAndTrailingSpaces.charAt(0);
    var lastCharacter = trimLeadingAndTrailingSpaces.charAt(trimLeadingAndTrailingSpaces.length-1);
    console.log(`      5. First and Last charcter of given string after remove extra spaces => ${firstCharacter} ${lastCharacter}`);

    console.log(`      6. Count the Total Words Available in the String After Step 3 => ${trimLeadingAndTrailingSpaces.split(" ").length}`);

    console.log(`      7. Index of word "good " from given string : ${trimLeadingAndTrailingSpaces.indexOf("good")}`);
    console.log(`      8. Substring starting from the index 22, using Substring Method :--> ${trimLeadingAndTrailingSpaces.substring(22)}`);
    console.log(`      8.1. Substring starting from the index 22, using Slice Method :--> ${trimLeadingAndTrailingSpaces.slice(22)}`);
    console.log(`      9. Is String ends with word "up" : ${trimLeadingAndTrailingSpaces.endsWith("up")}`);
    console.log(`     10. Is String start with word "Hey" : ${trimLeadingAndTrailingSpaces.startsWith("Hey")}`);
}
stringHandsOn();