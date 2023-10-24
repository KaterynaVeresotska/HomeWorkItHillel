//ДЗ 1//
/*
let ourDog = {
    name: "Sara",
    breed: "doberman",
    gender: "female",

     getDogInfo:function () {
        for (let key in this) {
           console.log(key, this[key]);
        }
    }
}
ourDog.getDogInfo(); // Правильна інформація про об'єкт//

ourDog.age=5; // Додали властивість до об'єкта//

ourDog.getDogInfo() // Виводить всі властивості, включаючи щойно додану//
*/


//ДЗ 2//
/*
let services = {
    "стрижка": "100 грн",
    "гоління": "110 грн",
    "Миття голови": "90 грн",
};
services['Розбити скло'] = "25 грн"
services[`маникюр`] = `155.5 грн`
services.pedikur = `200 грн`
services.ukladka =`800 грн`

function price() {
    let totalPrice = 0;
    console.log(this);
    for (let priceItem of Object.values(this)) {
        totalPrice += parseFloat(priceItem);
    }
    return `Total Price : ` + totalPrice + ` грн`
}

console.log(price.call(services)) //обчислює та повертає загальну вартість "наданих послуг"//
function minPrice() {
    let minPrice;
    let i;
    let priceItem = Object.values(this);
    minPrice = parseFloat(priceItem[0]);

        for ( i=0; i<Object.values(this).length; i++)

        if(minPrice>parseFloat(priceItem[i])){
            minPrice= parseFloat(priceItem[i]);
    }
 return `Minimum price : ` + minPrice+ ` грн`;
}
console.log(minPrice.call(services)) //повертає мінімальний price//
function maxPrice() {
    let maxPrice;
    let i;
    let priceItem = Object.values(this);
    maxPrice = parseFloat(priceItem[0]);

    for ( i=0; i<Object.values(this).length; i++)

        if(maxPrice<parseFloat(priceItem[i])){
            maxPrice= parseFloat(priceItem[i]);
        }
    return `Maximum price : ` + maxPrice+ ` грн`;
}
console.log(maxPrice.call(services)) //повертає максимальний price//
*/