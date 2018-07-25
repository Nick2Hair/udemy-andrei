// //My solution

// const fs = require('fs');

// const data = fs.readFile('./input.txt' , (err, data) => {
//     console.time("Fun Challenge!");
//     if(err) {
//         throw err;
//     }
//     //Usable data
//     let problem = data.toString();
//     //Find out what floor santa is on
//     findApartmentFloorLevel(problem);
//     //How long did it take?
//     console.timeEnd("Fun Challenge!");
// });

// const findApartmentFloorLevel = (problem) => {
//     let sum = 0;
//     let position = 0;
//     let arr = [];
//     let ph = 0;
//     let smallest = 0;
//     for(let i=0; i<problem.length; i++) {
//         position++;
//         //console.log("At position: "+position , "sum = "+sum);
//         if(problem.charAt(i) === "(") {
//             sum++;
//         }else if(problem.charAt(i) === ")") {
//             sum--;
//         }else {
//             console.log("invalid input");
//         }
//         if(sum === -1) {
//             arr.push(position);
//         }
//     }
//         smallest = arr[0];
//         for(let i=1; i<arr.length; i++) {
//             if(arr[i] < arr[i-1]) {
//                 ph = arr[i];
//                 smallest = ph;
//             }
//         }
//         console.log(smallest);
//         console.log(sum);
// };


const fs = require('fs');

function question1() {
const data = fs.readFile('./input.txt' , (err, data) => {
    console.time("Fun Challenge!");
    if(err) {
        throw err;
    }
    //Usable data
    const problem = data.toString();
    const problemArray = problem.split('');
    const answer = problemArray.reduce((acc, val) => {
        if(val ==='(') {
            return acc+=1;
        } else if(val === ')') {
            return acc-=1;
        }
    },0);
    
    console.log('answer' ,answer);
    //How long did it take?
    console.timeEnd("Fun Challenge!");
});
}

question1();

