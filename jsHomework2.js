var measureUnit="km"
var quantity=10
switch (measureUnit) {
    case "km":console.log(quantity+" "+measureUnit +" "+ "is "+quantity*1000+" "+"m")
        break
    case "hour":console.log(quantity+" "+measureUnit +" "+ "is "+quantity*60+" "+"min")
        break
    case "kilos":console.log(quantity+" "+measureUnit +" "+ "is "+quantity*1000+" "+"gram")
        break
    default:console.log("pls print km,hour or kilos")
}
