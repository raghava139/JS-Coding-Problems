function FindLargestNumber(arr){
    let Previous = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i]>Previous){
            Previous = arr[i];
        }
    }

    console.log('previous',Previous)
    return Previous;

}

FindLargestNumber([2,4,6,9,3]);