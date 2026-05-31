console.log("Hello from Funticing!");
let businessName = "Functicing"; console.log (businessName); 
let greeting = document.getElementById("welcomeMsg");

console.log(greeting);
function showGreeting() {

greeting.textContent = "Welcome to " + businessName + "!";

}

document.getElementById("myButton").addEventListener("click",
showGreeting);
