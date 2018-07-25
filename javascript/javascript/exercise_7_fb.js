var database = [];
var fbObj = [];

database = [
    {
        username: "kaelan",
        password: "austerberry"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];
    
console.log(database);

newsfeed = [
    {username: "un1" , timeline: "timeline1"},
    {username: "un2" , timeline: "timeline2"},
    {username: "un3" , timeline: "timeline3"}
];

console.log(newsfeed[0]);

function signIn(un, pw) {
    input = isUserValid(un, pw);
    if(input) {
        console.log(newsfeed);
    }
    else {
        console.log("Oops!");
    }
}

function isUserValid(un, pw) {
    for(var i=0; i<database.length; i++) {
        if(database[i].username === un && 
            database[i].password === pw) {
               return true;
        }
    }
    return false;
}
   
   
    // if(un === database[0].username &&
    //     pw === database[0].password) {
    //         console.log(newsfeed);
    //     }
    // else {
    //     console.log("Oops!");
    // }

    var unP = prompt("un");
    var pwP = prompt("pw");

signIn(unP, pwP);