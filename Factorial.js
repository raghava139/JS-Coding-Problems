// 5! = 5*4*3*2*1=?


function FactorialNumber(num) {
    if (num == 0) return false;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    console.log(factorial);
    return factorial

}
FactorialNumber(5);