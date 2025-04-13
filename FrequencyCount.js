function FrequencyCount(arr) {

    // let newArray = [];
    let newObj = {};

    for (let i = 0; i < arr.length; i++) {
        let Current = arr[i];
        if (!newObj[Current]) {
            newObj[Current] = 1;
            //newArray.push(Current);
        } else {
            newObj[Current] += 1;
        }
    }
    console.log('newObj', newObj)
    return newObj
}

let RandomArray = [1, 2, 1, 3, 4, 1, 4, 3, 1, 1]
FrequencyCount(RandomArray);
