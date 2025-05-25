// Input: ["a", 1, true, 2, null, 3]
// Output: [1, 2, 3]


let Arr1 =  ["a", 1, true, 2, null, 3];
function FindOnlyNumbers(){
    let newArr= Arr1?.filter((ele)=>typeof ele === 'number');
    console.log(newArr)
}
FindOnlyNumbers();