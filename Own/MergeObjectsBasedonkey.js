// Input : [
//     { name: 'a', values: [1, 2] },
//     { name: 'b', values: [3] },
//     { name: 'a', values: [4, 5] }
//   ]

// output:
//  [
//  { name: 'a', values: [1, 2, 4, 5] },
//  { name: 'b', values: [3] }
// ]
let Input = [
    { name: 'a', values: [1, 2] },
    { name: 'b', values: [3] },
    { name: 'a', values: [4, 5] }
]

function MergeObjectsBasedonKey(Input) {
    let result = {};
    Input?.forEach((elem) => {
        let NameKey = elem?.name;
        let valuesData = elem?.values

        if (!result[NameKey]) {
            result[NameKey] = elem
        } else {
            result[NameKey]?.values.push(...valuesData)
        }
    })
    console.log(result)
}
MergeObjectsBasedonKey(Input);