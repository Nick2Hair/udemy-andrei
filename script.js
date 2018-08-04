const fs = require('fs');

fs.readFile('./hannah.txt', (err,data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});