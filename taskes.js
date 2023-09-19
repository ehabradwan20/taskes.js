"use strict";
/*
############################################
                   end taskes
############################################
*/
alert(prompt("welcom task js"));
let continent = "asia";
let country = "palestine";
// let population =  4.923;
// console.log("عدد السكان :" + population);
console.log(typeof "55.5")

//  قم بتعريف متغير يسمى "isIsland" وقم بتعيين قيمته وفقًا لقيمتك
// دولة. يجب أن يحمل المتغير قيمة منطقية. أعلن أيضًا عن متغير
// "اللغة"، ولكن لا تقم بتعيين أي قيمة لها حتى الآن
// 2. قم بتسجيل أنواع "الجزيرة" و"السكان" و"البلد" و"اللغة"
// إلى وحدة التحكم


let isIsland = false;
const language = "Arabic";
console.log(typeof isIsland);
// console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(language);
let ehab = 8 / 2;
console.log(ehab);

let population =  4.923;
console.log(population / 2);
population++;
console.log(population)
let populationFinland = 6000000
console.log(population > populationFinland)
let avergepopulation = 3000000
console.log(population < avergepopulation)
// let description = country + " is in " + continent + " and is " + population + "  million people speak " + language;
let description = `${country} is in ${continent} and is 
${population} million pepole speak ${language}`
console.log(description); 
const FirstName = "ehab";
const ages = 23;
const lan = "arabic";
const year = 2035;
const oldyear = 2000;
const cv = "my name is: " + FirstName +  " and  i'm  speak: " + lan + " old my is:  " + (year - oldyear)  + " old yet yeayer is: " + ages;
console.log(cv); 

// Strings and Template Literals
const ehabnew = `my name is: ${FirstName} and i'm speak: ${lan} old my is: ${year - oldyear} old yet yeayer is: ${ages} `
console.log(cv);


// Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country} population is above average`)
}else{
    console.log(`${country} population is ${33 - population} million below average`)
}
// Type Conversion and Coercion

/*
############################################
                   end taskes
############################################
*/
let x = 8;
x++;
x/=3;
console.log(x)




