//intro to node

// const http = require('http');

// const srever = http.createServer((req, res) => {
//     console.log('header',req.headers);
//     console.log('method', req.method);
//     console.log('url' , req.url);
    
//     const user = {
//         name: 'john',
//         hobby: 'skating'
//     };

//     res.setHeader('Content-type' , 'application/json');
//     res.end(JSON.stringify(user));
// });

// server.listen(3000);

//Intro Express

// const express = require('express');
// const app = express();



// app.get('/' , (req, res) => {
//   res.send("I am Root!");
// });

// app.get('/profile' , (req, res) => {
//     res.send("Profile!");
// });

// app.get('/profile' , (req, res) => {
//     res.send("Profile!");
// });

// app.listen(3000);

//Using Middleware

// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     console.log("Hello!");
//     next();
// });

// app.get('/' , (req, res) => {
//   res.send("I am Root!");
// });

// app.listen(3000);


//Postman

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// //Middleware
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// //Gets
// app.get('/' , (req, res) => {
//   res.send("I am Root!");
// });

// //Posts
// app.post('/profile' , (req, res) => {
//     console.log(req.body);
//     const user = {
//         name: 'Sally' ,
//         hobby: 'Soccer'
//     }
//     res.send(user);
//   });

// app.listen(3000);


//RESTful API

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.listen(3000);

