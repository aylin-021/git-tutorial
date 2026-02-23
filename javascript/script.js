let numbers = document.querySelectorAll(".number");  
let zarbBtn = document.querySelector(".zarb"); 
let resultBtn = document.querySelector(".result"); 
let display = document.querySelector(".natije"); 

let Input = ""; 

numbers.forEach(function(item) {
    item.addEventListener("click", function() {
        Input += item.innerText;  
        document.querySelector(".natije").innerText = currentInput;
    });
});