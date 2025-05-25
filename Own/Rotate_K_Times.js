// [1, 2, 3, 4, 5], k = 2
// [4, 5, 1, 2, 3]

let Input = [1, 2, 3, 4, 5], k = 2 ;
function RotateKtimes(Input,times) {

    let ArrLength = Input.length;
    let ArrTime = times % ArrLength;
    console.log(ArrLength-ArrTime)

    let rotatedArr = Input.slice(-times).concat(Input.slice(0,ArrLength-ArrTime));
    console.log(rotatedArr)

}
RotateKtimes(Input,k);