let numbers = document.querySelectorAll(".number");  
let zarbBtn = document.querySelector(".zarb"); 
let resultBtn = document.querySelector(".result"); 
let display = document.querySelector(".natije"); 

let currentInput = ""; 

numbers.forEach(function(item) {
    item.addEventListener("click", function() {
        currentInput += item.innerText;  
        document.querySelector(".natije").innerText = currentInput;
    });
});