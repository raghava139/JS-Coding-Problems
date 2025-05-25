// Input: [1, 2, 3, 4, 5], chunk size: 2
// Output: [[1, 2], [3, 4], [5]]
let ChunkOrg = [1, 2, 3, 4, 5], size = 2

function ChunkArrResize(ChunkOrg, size) {

    let Result = [];

    for (let i = 0; i < ChunkOrg?.length; i += size) {
        Result?.push(ChunkOrg?.slice(i, i + size));
    }
    console.log(Result)
}

ChunkArrResize(ChunkOrg, size);