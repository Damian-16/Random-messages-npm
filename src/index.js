const messages = [
    "Jenipher",
    "Myriam",
    "Ale",
    "Damian",
    "Joaquin",
    "Bianca",
    "Maia"
];
const randomMsg =()=>{
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
}


module.exports = { randomMsg }