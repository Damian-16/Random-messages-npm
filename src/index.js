const messages = [
    "Ale",
    "Damian",
    "Joaquin",
    "Bianca"
];
const randomMsg =()=>{
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
}


module.exports = { randomMsg }