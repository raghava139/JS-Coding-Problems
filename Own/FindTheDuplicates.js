// Input:
const numbers = [1, 2, 3, 2, 4, 5, 1, 6];

// // Output:
// [1, 2]
function FindTheDuplicates(numbers) {
    let Result = {};
    let ResultArr = [];
    numbers?.forEach((ele) => {
        if(!Result[ele]){
            Result[ele] = 1
        }else{
            Result[ele] +=1
        }
        
    })
    console.log(Result)
    Object.entries(Result)?.map(([key,value])=>{
        if(value>1){
            ResultArr.push(key)
        }
    })
    console.log(ResultArr)
}

FindTheDuplicates(numbers);