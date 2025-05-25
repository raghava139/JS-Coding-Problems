// Input: 1234
// Output: 10 (1+2+3+4)

let InputNumber = 1234;

function SumofDigits(InputNumber) {

    let result = 0;
    let makeItString = `${InputNumber}`
    for (let i = 0; i < makeItString.length; i++) {
        let myNUm = Number(makeItString[i])
        result += Number(myNUm);
    }

    console.log(result)
}
SumofDigits(InputNumber);