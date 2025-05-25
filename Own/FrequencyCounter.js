// Input: ['a', 'b', 'a', 'c', 'a', 'b']
// Output: { a: 3, b: 2, c: 1 }

let Arr = ['a', 'b', 'a', 'c', 'a', 'b']

function FrequencyCount(Arr) {
    console.log('input', Arr)
    let Result = {}
    Arr.forEach((ele) => {

        if (!Result[ele]) {
            Result[ele] = 1
        } else {
            Result[ele] += 1
        }

    })
    console.log('output', Result)
}
FrequencyCount(Arr);