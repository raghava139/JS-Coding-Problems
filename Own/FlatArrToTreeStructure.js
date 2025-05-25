// [
//   { id: 1, name: 'a', parent: null },
//   { id: 2, name: 'b', parent: 1 },
//   { id: 3, name: 'c', parent: 1 }
// ]

// [
//   {
//     id: 1, name: 'a', parent: null,
//     children: [
//       { id: 2, name: 'b', parent: 1 },
//       { id: 3, name: 'c', parent: 1 }
//     ]
//   }
// ]



let inputArr = [
    { id: 1, name: 'a', parent: null },
    { id: 2, name: 'b', parent: 1 },
    { id: 3, name: 'c', parent: 1 }
]

function FlatToArrStruct(inputArr) {
    // console.log(inputArr)
    let testArr = inputArr?.reduce((acc, curr) => {

        if (curr.parent == null) {
            acc.push(curr);
        } else {
            if (acc.find((ele) => ele.id === curr.parent)) {
                let getArrIndex = acc.findIndex((ele) => ele?.id === curr.parent)

                if (!acc[getArrIndex]['children']) {
                    acc[getArrIndex]['children'] = [{ ...curr }]
                } else {
                   acc[getArrIndex]['children'].push(curr)
                }
            }
        }
        return acc;
    }, [])
    console.log(testArr)
}
FlatToArrStruct(inputArr);