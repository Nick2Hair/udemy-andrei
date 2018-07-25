// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// const exclamation = [];
// const exclamArray = array.forEach(el => {
//     el.username +="!";
//     exclamation.push(el);
// });
// console.log('exclamation' , exclamation);
// //Complete

//Create an array using map that has all the usernames with a "? to each of the usernames
// const questionArray = array.map(el => {
//   el.username += '?'
//   return el;
// });
// console.log('question',questionArray);
// //Complete

//Filter the array to only include users who are on team: red
// const filterArray = array.filter(el => el.team === 'red');
// console.log(filterArray);
//Complete

//Find out the total score of all users using reduce
// const reduceArray = array.reduce((acc, el, i) => {
//   const sum = acc+el.score;
//   return sum;
// },0);
// console.log('reduceArray' , reduceArray);
// //Complete

// (1), what is the value of i?
  //5
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => num * 2
// 	// console.log(num,i);
// 	// alert(num);
// );
// console.log(newArray);
//   //Complete

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const mapArray = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
});
console.log('mapArray' , mapArray);