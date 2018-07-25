const array = [1,2,10,16];

//forEach
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log('forEach' , double);

//map, filter, reduce

//map | creates a new array | transforms
const mapArray = array.map( num => num *2 );
console.log('map' ,mapArray);

//filter
const filterArray = array.filter( num => num > 5 );
console.log('filterArray' , filterArray);

//reduce
const reduceArray = array.reduce((acc, num) => acc+num );
console.log('reduceArray' , reduceArray);