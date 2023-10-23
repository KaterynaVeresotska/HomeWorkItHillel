 //ДЗ 1//
/*
function isNotaNumber (value) {
    if(value!==value||value===undefined||Number(value)!==Number(value)){
        console.log(`is NaN`);
        return true;
    }
    if(typeof Number(value)===`number`&& Number(value)!==NaN ){
        return false;
    }
    else {
        return  false;}
}
console.log(isNotaNumber(45));
*/

 //ДЗ 2//
/*
 let newString = `qwerty`;
 function padCreate(str, symbol, count, boolean) {
     count = count - str.length;

     for (let i = 1; i <= count; i++) {

         if (boolean === false) {

             str += symbol
         } else {
             let finSymbol = ``;
             finSymbol += symbol
             str = finSymbol + str;
         }

     }
     console.log (str)
     return str;
 }
padCreate("time","#",7,true)
*/

 //ДЗ 3//
/*
 let min = 100
 let max = 1000

function getRandomInt(min = 100, max = 1000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function checkProbabilityTheory(count) {
    let randomFigure;
    let pairedFigure;
    let oddFigure;
    let oddFigureNum=0;
    let pairedFigureNum=0;
    let pairedFigurePercent;
    let oddFigurePercent;
    for (i = 0; i <count; i++) {
        randomFigure = getRandomInt()

        if (randomFigure % 2 === 0) {
            pairedFigure = randomFigure
            pairedFigure=randomFigure;
            pairedFigureNum +=pairedFigure/pairedFigure
        }

        else {
            oddFigure = randomFigure
            oddFigureNum +=oddFigure/oddFigure
        }


    }
    pairedFigurePercent=pairedFigureNum/count*100;
    oddFigurePercent=oddFigureNum/count*100;

    console.log(`Quantity of generated numbers is ` + count)
    console.log(`Number of paired figure:` + pairedFigureNum)
    console.log(`Number of odd figure:` + oddFigureNum);
    console.log(`Paired figure percent is `+pairedFigurePercent+` %`)
    console.log(`Odd figure percent is `+oddFigurePercent+` %`)

}
checkProbabilityTheory(6)
*/
