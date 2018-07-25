//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
// const addTo = x => y => x + y;
// var addToTen = addTo(10)
// console.log(addToTen(3));
// //13
    //right: complete

//Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// console.log(curriedSum(30)(1));
// //31
    //Complete | correct

//Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// console.log(add5(12));
//17
    //Complete | Correct


//Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// console.log(compose(add1, add5)(10));
//16
    //Complete || Correct



// //What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given 
//  the same inputs
// 2. No Side Effects -->  It does not depend on any state, 
//  or data, change during a program’s execution. It must only depend 
//  on its input elements.

