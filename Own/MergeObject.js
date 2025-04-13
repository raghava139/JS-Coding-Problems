const data = [
    { name: 'a', values: [1, 2] },
    { name: 'b', values: [3] },
    { name: 'a', values: [4, 5] }
];


function toMergeObjects(data, name, values) {
    // console.log(data)
    // console.log(name)
    // console.log(values)

    if (data?.length > 0) {
        let result = {}
        data?.forEach(element => {
            let nameObj = element[name];
            let valuesObj = element[values];

            if (!result[nameObj]) {
                result[nameObj] = {
                    [name]: nameObj,
                    [values]: []
                }
            }

            result[nameObj][values].push(...valuesObj)
        })
        console.log(Object.values(result))

        return result
    }

}

toMergeObjects(data, 'name', 'values');
// output
//   [
//     { name: 'a', values: [1, 2, 4, 5] },
//     { name: 'b', values: [3] }
//   ];
