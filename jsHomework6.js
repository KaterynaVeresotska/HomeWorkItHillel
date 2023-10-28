//ДЗ 1//
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function blendArr(arr) {

       arr.sort(()=>Math.random()-0.5)

    console.log(arr)
}

blendArr(arr);
*/

//ДЗ 2//

/*
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function renderCompanies(obj,companyName) {
    let item;
    for (let key in obj) {
         item = obj[key];
         if(Array.isArray(item)) {
             for (let clue in item) {
                 (function (){
                         renderCompanies(item[clue],companyName)
                 })()
             }
         }
    }
    if(companyName===obj.name) {
        for(let element in obj){
            if(element!==`partners`&&element!==`clients`)   {
                console.log(element + ` : ` +obj[element]);
            }
        }
    }

}

renderCompanies(company,'Клієнт 1.1') */
