const salary = 30000;
const isBcs = true;
const height = 5.6;
const isCar = true;

// if(salary > 25000){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }


// if(salary > 25000 || height > 6){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// if(salary > 25000 && height > 6) {
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// if((salary > 25000 && height > 6) || isCar == true) {
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

if((salary > 30000 && height > 6) || (isCar == true && isBcs == true)) {
    console.log('yes');
}
else{
    console.log('no');
}