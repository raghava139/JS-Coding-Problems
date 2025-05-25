// 1. call
// Invokes a function immediately.
// Takes arguments one by one.
// Syntax: func.call(thisArg, arg1, arg2, ...)


// 2. apply
// Invokes a function immediately.
// Takes arguments as an array.
// Syntax: func.apply(thisArg, [arg1, arg2, ...])


// 3. bind
// Does NOT invoke the function immediately.
// Returns a new function with a bound this and optional preset arguments.
// Takes arguments one by one (similar to call).


let person = {name:'raghavendra',age:'26'};
function somefunc(y){
    console.log(y)
    console.log(this.name)
}

// let emptyAr= ['th']
somefunc.call(person,'th')
somefunc.apply(person,['th'])
let newFn = somefunc.bind(person,'th')
newFn();