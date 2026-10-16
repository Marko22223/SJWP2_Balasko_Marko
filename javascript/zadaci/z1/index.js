
//z1
/*for(let i = 1; i <= 10; i++) {
    console.log(i);
}*/

//z2
/*let n = Number(prompt("Unesite broj: "));
let sum = 0;
for(let i = 1; i<=n; i++){
    sum += i;
}
console.log("Suma brojeva od 1 do " + n + " je: " + sum);*/

//z3
/*let ocjene = [4,5,3,4,2];
let sum = 0;
let prosjek = 0;

for(let i = 0; i < ocjene.length; i++){
    sum += ocjene[i];
}

prosjek = sum / ocjene.length;
console.log("Prosjek ocjena je: " + prosjek);*/

//z4
/*let n = Number(prompt("Unesite broj: "));
let neparniBrojevi = [];
let parniBrojevi = [];

for(let i = 1; i<=n; i++){
    if(i % 2 === 0) parniBrojevi.push(i);
    else neparniBrojevi.push(i);
}

console.log("Parni brojevi: " + parniBrojevi);
console.log("Neparni brojevi: " + neparniBrojevi);
*/

//z5
/*let polje = [12,7,25,4,19];
let najveci = 0;

for(let i=0; i<polje.length; i++){
    if(polje[i] > najveci){
        najveci = polje[i];
    }
}
console.log(najveci);
*/

//z6
/*let polje = [2,6,4,3,2];
let n = Nuber(prompt("Unesite broj: "));

for(let i = 0; i<polje.length; i++){
    if(n === polje[i]){
        console.log("Broj se nalazi u polju");
    }
}
*/

/*let godina = Number(prompt("Unesite godinu:"));

if((godina % 400 === 0 || godina % 4 === 0) && godina %100 != 0){
    console.log("Godina je prijestupna");
}
else{
    console.log("Nije prijestupna");
}

*/

/*let rijec = prompt("Unesite rijec:");
let samoglasnici = ['a', 'e', 'i', 'o', 'u'];
let br = 0;
for(let i = 0; i<rijec.length; i++){
    if(samoglasnici.includes(rijec[i])) br++;
}
console.log(br);
*/



