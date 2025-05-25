function sum(...args) {
    // Your implementation
    let arrayList = [...args];
    if (!arrayList) return 0;
    return arrayList?.reduce((prev, curr) => {
        return Number(prev) + Number(curr); 
    }, 0)

}

//For the purpose of user debugging.
console.log(sum(1,2,-3,4,5)); // 9`