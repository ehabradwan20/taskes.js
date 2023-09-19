"use strict";
/*
############################################
                   CHALLENGE
############################################
*/


/* CHALLENGE #1 */
let massEhab = 78;
let heightEhab = 1.69;
let massWesam= 92;
let heightWesam= 1.95;
// let BMIEhab = massEhab / (heightEhab * heightEhab);
let BMIEhab = massEhab / heightEhab ** 2;
let BMIWesam = massWesam / (heightWesam * heightWesam); 
let markHigherBMI = BMIEhab > BMIWesam;
console.log(BMIEhab , BMIWesam , markHigherBMI);
// let markHigherBMI = (massEhab + heightEhab) > (massWesam + heightWesam)
// consol.log(markHigherBMI)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);


/* CHALLENGE #2 */
if (BMIEhab > BMIWesam ) {
    console.log(`Ehab's BMI (${BMIEhab}) is higher than Wesam's (${BMIWesam}) !`)
}else{
    console.log(`Wesam's BMI (${BMIWesam}) is higher than Ehab's (${BMIEhab})!`)
}
prompt("hi is develoer ?");

/* CHALLENGE #3 */
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95+ 106) / 3 ; 
console.log(scoreDolphins,scoreKoalas)
if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("dolphins win the trophy🏆")
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("koalas win the trophy🏆")
} else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("both win the trophy🏆")
}else{
    console.log("no one the trophy😔")
}
/* CHALLENGE #4 */
// const tip;
// if (tip >) {
    
// }


