// Input: [1,2,3,4], [2,4,6]
// Output: [2, 4]

let Arr1 = [1, 2, 3, 4];
let Arr2 = [2, 4, 6];
function FindCommonElements(Arr1, Arr2) {

    let ResultArr = [];
    Arr1?.forEach((ele) => {
        if (Arr2.includes(ele)) {
            ResultArr.push(ele)
        }
    })
    console.log(ResultArr)
}
FindCommonElements(Arr1, Arr2);