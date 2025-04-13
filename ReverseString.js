// two ways to write the logic of reverse String
function ReverserString(str) {
    let Reverserd = '';
    for (let i = str.length - 1; i >= 0; i--) {
        Reverserd += str[i];
    }
    return Reverserd

}
console.log(ReverserString('failure'));


// function ReverserString(str){
    
//     let ReString = str.split('').reverse().join('');
//     return ReString;
// }
// console.log(ReverserString('silence'));