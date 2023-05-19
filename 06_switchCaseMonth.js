function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Month is: January as Month number is ${monthNumber}`);
      break;
    case 2:
      console.log(`Month is: February as Month number is ${monthNumber}`);
      break;
    case 3:
      console.log(`Month is: March as Month number is ${monthNumber}`);
      break;
    case 4:
      console.log(`Month is: April as Month number is ${monthNumber}`);
      break;
    case 5:
      console.log(`Month is: May as Month number is ${monthNumber}`);
      break;
    case 6:
      console.log(`Month is: Jun as Month number is ${monthNumber}`);
      break;
    case 7:
      console.log(`Month is: July as Month number is ${monthNumber}`);
      break;
    case 8:
      console.log(`Month is: August as Month number is ${monthNumber}`);
      break;
    case 9:
      console.log(`Month is: September as Month number is ${monthNumber}`);
      break;
    case 10:
      console.log(`Month is: Octomber as Month number is ${monthNumber}`);
      break;
    case 11:
      console.log(`Month is: November as Month number is ${monthNumber}`);
      break;
    case 12:
      console.log(`Month is: December as Month number is ${monthNumber}`);
      break;
    default:
        console.log(`Please Enter Valid Details`);
      break;
  }
}
console.log(`---------------------------------------------------------------------------------`);
console.log(`                          Switch Case Month Assignment`);
console.log(`---------------------------------------------------------------------------------`);
monthOfYear(2);
console.log(`---------------------------------------------------------------------------------`);
monthOfYear(5);
console.log(`---------------------------------------------------------------------------------`);
monthOfYear(100);
console.log(`---------------------------------------------------------------------------------`);
monthOfYear(12);
console.log(`---------------------------------------------------------------------------------`);
monthOfYear(15);
console.log(`---------------------------------------------------------------------------------`);

