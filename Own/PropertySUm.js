
// [
//   { category: 'A', qty: 25 },
//   { category: 'B', qty: 5 }
// ]

let Property = [
    { category: 'A', qty: 10 },
    { category: 'B', qty: 5 },
    { category: 'A', qty: 15 }
]

function PropertySum(Property) {
    let result = {};

    Property.forEach((elem) => {
        let categoryUID = elem?.category;

        if (result[categoryUID]) {
            let resultQty = result[categoryUID]?.qty + elem.qty;
            result[categoryUID] = { ...elem, qty: resultQty }
        } else {
            result[categoryUID] = { ...elem }
        }
    })
    let resultValues = Object.values(result);
    console.log(resultValues)
    return resultValues;

}
PropertySum(Property);
