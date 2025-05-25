// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]


let Arr = [1, 2, 3, 4]
function ReverseArrWithoutMethod(Arr) {

    let resultArr = [];
    for (let i = Arr.length; i--;) {
        resultArr.push(Arr[i]);
    }
    console.log(resultArr);

}
ReverseArrWithoutMethod(Arr);

// // let Roman = 'MMMMMDL'; //5550
// let Roman = 'MMMMMMMMCXCIX'; //8199

// function ToKnowTheNumberofRoman(Roman) {
//     let romanMap = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }

//     let total = 0;
//     for (let i = 0; i < Roman?.length; i++) {
//         let current = romanMap[Roman[i]];
//         let Next = romanMap[Roman[i + 1]];

//         if (Next > current) {
//             total += (Next - current);
//             i++;
//         } else {
//             total += current;
//         }
//     }
//     console.log(total)
// }
// ToKnowTheNumberofRoman(Roman);