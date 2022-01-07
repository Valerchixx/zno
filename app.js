function cool(maks,idsubject){

const fs = require('fs');
const response= fs.readFileSync('zno_2018.json');
const data = JSON.parse(response);
let coun1 = 0;

for(let i = 0; i <Object.keys(data[idsubject].stats).length; i++){
   coun1 += Object.values(data[idsubject].stats)[i]
}
let coun2 = 0;

for(let i =0; i <Object.keys(data[idsubject].stats).length; i++){
    if( Object.keys(data[idsubject].stats)[i]<maks){
        coun2 += Object.values(data[idsubject].stats)[i]
    }else{
        continue
    }
}
let res = coun2 / coun1 * 100;
let result =` Ты здал лучше чем ${Math.ceil(res*100) /100}% студентов`
console.log(result);
}

cool(185,1)