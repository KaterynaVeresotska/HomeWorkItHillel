//'number' + 3 + 3//
/*var operandString = "number" //Assign the value "number" to operandString//
var operandNumber = 3 //Assign the value 3 to operandNumber//
var operandNumber2 = 3 //Assign the value 3 to operandNumber2//
console.log(operandString+operandNumber+operandNumber2) //When used on strings, the + operator is called the concatenation operator.//
// The result will be "number33"// */

//null + 3//
/*var operandNull= null //Assign the value null to operandNull//
var operandNumber= 3 //Assign the value 3 to operandNumber//
console.log(operandNull+operandNumber) //When used null to number = 0.//
 //The result will be 3//*/

//5 && "qwerty"//
/* var operandNumber=5 //Assign the value 5 to operandNumber//
 var operandString="qerty" //Assign the value "qerty" to operandString//
console.log(operandNumber&&operandString) // Both of operands as Booleans are true, return as result last true.//
 //The result will be "qerty" //*/

//+'40' + +'2' + "hillel"//
/*var operandStringNumber=+"40"//Assign the value "40" to operandStringNumber_1 and converting by unary + to type number (40)//
var operandStringNumber2=+"2"//Assign the value "2" to operandStringNumber_2 and converting by unary + to type number (2)//
var operandString="hillel"//Assign the value "hillel" to operandString//
console.log(operandStringNumber+operandStringNumber2+operandString)//First make arithmetic operation (+) with type of number (result will be 42)//
// Then make concatenation with type of string.The final result will be "42hillel"//*/

//'10' - 5 === 6//
/*var operandStringNumber="10"//Assign the value "10" to operandStringNumber//
var operandNumber=5//Assign the value 5 to operandNumber//
var operandNumber2=6//Assign the value 6 to operandNumber2//
console.log(operandStringNumber-operandNumber===operandNumber2)// First make arithmetic operation (-) with type of string and type of number (result wil be 5).//
//(===)Returns true if the operands are equal and of the same type.//
//The final result will be False, because 5 not equal 6.//*/

//true + false//
/*var operandBoolean =true //Assign the value true to operandBoolean//
var operandBoolean2= false //Assign the value false to operandBoolean2//
console.log(operandBoolean+operandBoolean2) // When converting booleans type to number, true=1 , false=0.//
// The result will be 1//*/

//'4px' - 3//
/*var operandString="4px"//Assign the value "4px" to operandString//
var operandNumber=3 //Assign the value 3 to operandNumber//
console.log(operandString-operandNumber) //If string type content numbers and letters (symbols) values, upon converting gets NaN.//
//The result will be NaN.//*/

//'4' - 3//
 /*var operandString ="4" //Assign the value "4" to operandString//
 var operandNumber = 3 //Assign the value 3 to operandNumber//
console.log(operandString-operandNumber) //If string type content only numbers values, upon converting gets numbers.//
//The result will be 1.//*/

//'6' + 3 ** 0//
/*var operandString ="6" //Assign the value "6" to operandString//
var operandNumber = 3 //Assign the value 3 to operandNumber//
var operandNumber2=0 //Assign the value 0 to operandNumber2//
console.log(operandString+operandNumber**operandNumber2) //First use exponentiation (**) operator.//
// Operator returns the result of raising the first operand to the power of the second operand (result will be 1).//
//Then make concatenation with type of string.The final result will be "61".//*/

//12 / '6'//
/*var operandNumber=12 //Assign the value 12 to operandNumber//
var operandString="6" //Assign the value "6" to operandString//
console.log(operandNumber/operandString)// When use division (/) number type divides to string type ,as result get type number.//
//The result will be 2.//*/

//'10' + (5 === 6)//
/*var operandString="10" //Assign the value "10" to operandString//
var operandNumber=5 //Assign the value 5 to operandNumber//
var operandNumber2= 6 //Assign the value 6 to operandNumber2//
console.log(operandString+(operandNumber===operandNumber2)) // First make (===): 5 not equal 6, so the result will be false. //
//Then make concatenation with type of string and false. The final result will be "10false".//*/

//null == ''//
/*var operandNull= null //Assign the value null to operandNull//
var operandString= "" //Assign the value "" to operandString//
console.log(operandNull == operandString) //(==) Returns true if the operands are equal.//
// null not equal "", so result will be false.//*/

//3 ** (9 / 3)//
/*var operandNumber=3 //Assign the value 3 to operandNumber//
var operandNumber2=9 //Assign the value 9 to operandNumber2//
var operandNumber3=3 //Assign the value 3 to operandNumber3//
console.log(operandNumber**(operandNumber2/operandNumber3)) // First make divides (/), (result will be 3)//
//Then make exponentiation (**) operator. Final result will be 27.//*/

//!!'false' == !!'true'//
/*var operandString = "false" //Assign the value "false" to operandString//
var operandString2="true" //Assign the value "true" to operandString2//
console.log (!!operandString==!!operandString2) //When converting string type with value to booleans, will be true.//
//Then make double NOT (!!) truthy returns true. Final result will be true//*/

//0 || '0' && 1//
/*var operandNumber= 0 //Assign the value 0 to operandNumber//
var operandString="0" //Assign the value "0" to operandString//
var operandNumber2=1 //Assign the value 1 to operandNumber2//
console.log(operandNumber||operandString&&operandNumber2)//When used with Boolean values, (&&)returns last true if both operands are true.("0"-true and 1-true)//
//(||) operator returns operandNumber if it can be converted to true; but 0 - false, so return operandNumber2 (value=1), because it is last true.//
//final result will be 1//*/

//(+null == false) < 1//
/*var operandNull= null //Assign the value null to operandNull//
var operandBoolean= false //Assign the false to operandBoolean//
var operandNumber=1 //Assign the value 1 to operandNumber//
console.log((+ operandNull==operandBoolean)<operandNumber)// First make unary(+) converted null to 0. In boolean 0-false.//
// Then make (==) false==false, gives result true. When using arithmetic operator comparing (<), true(in boolean=1)<1.//
//Final result will be false.*/

//false && true || true//
/*var operandBoolean =false //Assign the false to operandBoolean//
var operandBoolean2=true //Assign the true to operandBoolean2//
var operandBoolean3=true //Assign the true to operandBoolean3//
console.log(operandBoolean&&operandBoolean2||operandBoolean3)//When used with Boolean values,(&&)returns false if one of operands are false.//
//(||) operator returns first true if one of them true.The result will be true (operandBoolean3).//*/

//false && (false || true)//
/*var operandBoolean =false //Assign the false to operandBoolean//
var operandBoolean2=false//Assign the true to operandBoolean2//
var operandBoolean3=true //Assign the true to operandBoolean3//
console.log(operandBoolean&&(operandBoolean2||operandBoolean3))// First (||) operator returns first true if one of them true.The result will be true (operandBoolean3)//
//Then operator (&&) returns false if one of operands are false (operandBoolean).So final result will be false.//*/

//(+null == false) < 1 ** 5//
/*var operandNull= null //Assign the value null to operandNull//
var operandBoolean= false //Assign the false to operandBoolean//
var operandNumber=1 //Assign the value 1 to operandNumber//
var operandNumber2=5 //Assign the value 5 to operandNumber2//
console.log((+ operandNull==operandBoolean)<operandNumber**operandNumber2)//First make unary(+) converted null to 0. In boolean 0-false.//
// Then make (==) false==false, the result will be true. Then use exponentiation (**) operator (1**5), result wil be 1.//
//Then using arithmetic operator comparing (<), true(in boolean=1)<1.//
// Final result will be false.//*/
