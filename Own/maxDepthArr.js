// Input: [1, [2, [3, [4]]]]
// Output: 4


let Arr = [1, [2, [3, [4]]]];

function MaxDepthArr(Arr,result=null) {
    if (!Array.isArray(Arr)) return 0;

    for (let i = 0; i < Arr.length; i++) {
        let elem = Arr[i];
        if(Array.isArray(elem)){
            result = MaxDepthArr(elem);
        }else{
            result = elem
        }
    }
    return result;
}
console.log(MaxDepthArr(Arr));