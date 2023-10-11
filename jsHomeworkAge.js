var age = prompt("Вкажіть свій вік");
if(Number(age)>=0 && age!==null) {
    if (age == 1 || age[age.length - 1] == 1 && age[age.length - 2]!=1 ) {
        console.log("Вам " + age + " " + "рік");
    } else if (age[age.length - 1] == 2 && age[age.length - 2]!=1 || age[age.length - 1] == 3 && age[age.length - 2]!=1 || age[age.length - 1]==4 && age[age.length - 2]!=1) {
        console.log("Вам " + age + " " + "роки");
    }

    else {
        console.log("Вам " + age + " " + "років")
    }
}
else{
    console.log(`Ні,це не підходить.Вкажіть свій вік (число).`)
}