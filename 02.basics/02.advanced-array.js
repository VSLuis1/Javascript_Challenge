const marvelHeroes = ["ironman","captain america",
"hulk"];

const dcHeroes = ["batman","superman","flash"];


// 1. concat
const heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes); //returns output - [ 'ironman', 'captain america', 'hulk', 'batman', 'superman', 'flash' ]

// 2. includes
console.log(heroes.includes("ironman")); //returns boolean value true or false


//Spread Operator
const spreadHeroes = [...marvelHeroes,...dcHeroes];
console.log(spreadHeroes) //returns output - ["ironman","captain america","hulk","batman","superman","flash"]


let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score,score2,score3)) //returns output - [100,200,300]

// 3. from
const fromHeroes = Array.from(marvelHeroes);
console.log(fromHeroes); //returns output - [ 'ironman', 'captain america', 'hulk' ]