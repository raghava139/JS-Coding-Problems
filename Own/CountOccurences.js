

// Input:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Output:
// { apple: 3, banana: 2, orange: 1 }

function CountOccurences(fruits){

    let result = {};

    fruits?.map((ele)=>{
        if(!result[ele]){
            result[ele] = 1
        }else{
            result[ele] += 1
        }
    })

    return result;

}
console.log(CountOccurences(fruits));