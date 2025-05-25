// [1, 2, 3, 4, 5]
// { even: [2, 4], odd: [1, 3, 5] }

let Input = [1, 2, 3, 4, 5]
function GroupEvenOrOdd(Input) {
    let result = { Even: [], Odd: [] };

    Input?.forEach(Elem => {
        if (Elem % 2 == 0) {
            result?.Even.push(Elem)
        } else {
            result?.Odd.push(Elem)
        }
    })
    console.log(result)
}
GroupEvenOrOdd(Input);