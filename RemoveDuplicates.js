function RemoveDuplicates(str) {
    let frequencyCount = {};
    let UniqueArray = [];


    for (let i = 0; i < str.length; i++) {
        let element = str[i];

        if (!frequencyCount[element]) {
            frequencyCount[element] = 1;
            UniqueArray.push(element);
        }
    }
    console.log('UniqueArray', UniqueArray)
    return UniqueArray;
}

RemoveDuplicates([1, 2, 3, 4, 5, 4, 5, 4, 5, 4, 6, 6, 5, 4, 3]);
