let pronoun = ['the', 'our', 'is', ''];
let adj = ['great', 'big', 'amazing', 'small'];
let noun = ['jogger', 'racoon', 'app', 'net'];
let finish = ['.com', '.net', '.org'];

let randomPronoun = Math.floor(Math.random() * pronoun.length);
let randomAdj = Math.floor(Math.random() * adj.length);
let randomNoun = Math.floor(Math.random() * noun.length);
let randomFinish = Math.floor(Math.random() * finish.length);

console.log(`${pronoun[randomPronoun]}${adj[randomAdj]}${noun[randomNoun]}${finish[randomFinish]}`);
