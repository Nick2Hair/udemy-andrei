// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
    const promise = new Promise((resolve, reject) => {
      if(true) {
        resolve('Success!');
      } else {
        reject('Error');
      }
    });

// #2) Run the above promise and make it console.log "success"
    Promise.all([promise])
    .then(result => console.log(result));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const shorterPromise = Promise.resolve('Success');
shorterPromise.then(value => console.log(value));


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('fail').catch(console.log('Oops! Something went wrong!'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
];

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json());
})).then(result =>  {
    for(var i=0; i<result.length; i++) {
      console.log(result[i]);
    } 
}).catch(() => console.log('Error!'));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
//works