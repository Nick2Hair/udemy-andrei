const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures:
/**
 * A function ran, the function executed, its never going to execute again
 * but it is going to remember that there are references to those
 * variables
 * so the child scope always has access to the parent scope
 */

 //Currying
 /**
  * 
  */

  const multiply = (a,b) => a*b;
  const curriedMultiply = (a) => (b) => a*b;
  curriedMultiply(3);

//Compose
const compose = (f,g) => (a) => f(g(a));
const sum = (num) + 1;
compose(sum, sum)(5);

//Avoiding side effects and functional purity
//Deterministic
    //Goal is to have the return value to be the same all the time
    

