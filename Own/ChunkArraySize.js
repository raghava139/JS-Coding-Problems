// Input: [1,2,3,4,5,6], chunkSize = 2
// Output: [[1,2], [3,4], [5,6]]


let Arr = [1, 2, 3, 4, 5, 6], chunkSize = 2;


function ChunkArrSet(Arr, size) {


    let Result = [];
    for (let i = 0; i < Arr.length; i += size) {
        Result.push(Arr?.slice(i, i + size))
    }
    console.log(Result)
}
ChunkArrSet(Arr, chunkSize);