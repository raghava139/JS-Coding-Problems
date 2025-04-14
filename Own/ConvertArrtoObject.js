// // Input:
// [['a', 1], ['b', 2]]

// // Output:
// { a: 1, b: 2 }

let Arr = [['a', 1], ['b', 2]];

function ConvertingArrtoObj(Arr) {



    let takeResult = {}
    Arr?.map(([key,value]) => {
        takeResult[key] = value
    })
    console.log('takeResult',takeResult)
}
ConvertingArrtoObj(Arr)