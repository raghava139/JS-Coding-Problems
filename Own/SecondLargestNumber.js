const numbers = [1, 5, 3, 9, 7];


function SecondLargestNumber(numbers) {

    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest
            largest = numbers[i]
        }else if (numbers[i] > secondLargest && numbers[i] !== largest) {
            secondLargest = numbers[i];
        }
    }
    console.log(secondLargest)
    return secondLargest;
}

SecondLargestNumber(numbers)



// const numbers = [1, 2, 2, 3, 4, 4, 5];
// function removeDuplicates (numbers){

//     let result={}
//     // let ResultofArr = []
//     numbers?.map((n)=>{
//         if(!result[n]){
//             result[n] = 1
//         }else{
//             result[n] += 1
//         }
//     })
  
//     return  result

// }
// console.log(removeDuplicates(numbers));