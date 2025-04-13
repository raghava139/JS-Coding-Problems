const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];


function IntersectionFunc(arr1,arr2) {
    
    let ResultofArr=[];
    arr1?.filter((number,index)=>{
        if(arr2.includes(number)){
            ResultofArr?.push(number)
        }
    })
    console.log(ResultofArr)
}
IntersectionFunc(array1,array2);