// Input: [1, 2, 3, 4, 5, 6], chunk size: 2


let arr = [1, 2, 3, 4, 5, 6];
let size = 2;

// Output: [[1, 2], [3, 4], [5, 6]]

function ChunkArrGroup(arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i+=size) {
        let chunk = arr?.slice(i,i+size);
        // console.log(chunk);
        result.push(chunk);
    }
    console.log(result);
    return result;
}
ChunkArrGroup(arr, size);