// Input:
const obj = { a: 1, b: 2, c: 3 };

// Output:
// { 1: 'a', 2: 'b', 3: 'c' }


function SwapThekeyValues(obj) {
    console.log(obj)
    let result = {};

    Object.entries(obj)?.map(([keys, values]) => {
        result[values] = keys;
    })

    console.log(result)
}
SwapThekeyValues(obj)