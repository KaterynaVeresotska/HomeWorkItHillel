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
    type: 'Головна компанія',
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
                        },
                        {
                            name: 'Клієнт 1.2.4',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        },
                        {
                            name: 'Клієнт 1.2.5',
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
        },
        {
            name: 'Клієнт 3',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueKey(companyName) {
    let mainCompanyInfo;
    if (companyName === company.name) {
        for (let key in company) {
            if (key !== `clients`) {
                mainCompanyInfo = key + ` : ` + company[key] + ` , `
                console.log(mainCompanyInfo)
            }
        }
    }
    company.clients.forEach((client) => {
        if (companyName === client.name) {
                for (let key in client) {
                    if (key !== `partners`) {
                        let subCompanyInfo = key + ` : ` + client[key] + ` , `
                        console.log(subCompanyInfo)
                    }
                }
            }
        if (client.partners !== undefined) {
                client.partners.forEach(partner => {
                    if (companyName === partner.name) {
                        for (let key in partner) {
                            if (key !== `partners`) {
                                let subSubCompanyInfo = key + ` : ` + partner[key] + ` , `
                                console.log(subSubCompanyInfo)
                            }
                        }

                    }
                    if (partner.partners !== undefined) {
                        partner.partners.forEach((subPartner) => {
                                if (companyName === subPartner.name) {
                                    for (let key in subPartner) {
                                        if (key !== `partners`) {
                                            let subSubSubCompanyInfo = key + ` : ` + subPartner[key] + ` , `
                                            console.log(subSubSubCompanyInfo)
                                        }
                                    }
                                }
                            }
                        )
                    }
                })
            }

        })

}

findValueKey("Велика Компанія") */
