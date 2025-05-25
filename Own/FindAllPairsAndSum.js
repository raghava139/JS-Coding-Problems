// let Arr = [2, 4, 3, 5, 6, -2, 7, 8, 9]
// let target = 7
//output: 
//[[2,5],[4,3],[-2,9]]


let Arr = [2, 4, 3, 5, 6, -2, 7, 8, 9]
let target = 7
function FindAllPairsAndSum(Arr) {
    console.log(Arr)
    let ResultArr = [];
    for (let i = 0; i < Arr.length; i++) {
        let PreviousIndex = Arr[i]
        for (let j = i + 1; j < Arr.length; j++) {

            let CurrentIndex = Arr[j];

            let isSum = PreviousIndex + CurrentIndex === target;

            if (isSum) {
                ResultArr.push([PreviousIndex, CurrentIndex]);
            }

        }
    }
    console.log(ResultArr)
}
FindAllPairsAndSum(Arr);