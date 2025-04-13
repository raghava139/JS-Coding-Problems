const mixedArray = [0, 'hello', false, '', 42, null, undefined];
// ['hello', 42]


function RemoveFalsyValues(mixedArray) {

    let emptyArry = mixedArray?.filter((arr) => {
        if (arr) {
            return arr
        }
    })

    console.log(emptyArry)

}
RemoveFalsyValues(mixedArray);
