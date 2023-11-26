//ДЗ 1//
/*
let text = "Весна богата на цветы"
let re = /[^AaАа]{6,}/
console.log(re.test(text));
console.log(text.search(re));
console.log(text.match(re)[0])
*/

//ДЗ 2//
/*
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
]
function paranoia(arr){
    let re = /^([a-zA-Z0-9]+)\.?([a-zA-Z0-9]+)(@gmail|@yahoo)\.com$/;
    let arrValid = [];
    for (let i = 0; i < arr.length; i++) {
        if (re.test(arr[i].email)) {
            arrValid.push(arr[i].email);
        }
    }
    return arrValid;
}
console.log(paranoia(arr));
*/