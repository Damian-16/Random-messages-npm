const messages = [
    "Ale",
    "Damian",
    "Joaquin",
    "Bianca"
];
const randomMsg =()=>{
    const messages = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
}


module.exports = { randomMsg }