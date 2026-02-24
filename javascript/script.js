let number = document.querySelectorAll(".number");
let zarb = document.querySelector(".zarb");
let result = document.querySelector(".result");
let natije = document.querySelector(".natije");
let sum = document.querySelector(".sum");
let menha = document.querySelector(".menha");
let taghsim = document.querySelector(".taghsim");
let clear = document.querySelector(".clear");

let zakhireMeghdarFeli = "";
let zakhireMeghdarGhabli = "";
let zakhireAmalgareEntekhabi = "";

number.forEach(item => {
    item.addEventListener("click", function () {
        zakhireMeghdarFeli += item.textContent;
        natije.textContent = zakhireMeghdarFeli;
    })
});

zarb.addEventListener("click", function () {
    if (zakhireMeghdarFeli !== "") {
        zakhireMeghdarGhabli = zakhireMeghdarFeli;
        zakhireMeghdarFeli = "";
        zakhireAmalgareEntekhabi = "*";
    }
});

sum.addEventListener("click", function () {
    if (zakhireMeghdarFeli !== "") {
        zakhireMeghdarGhabli = zakhireMeghdarFeli;
        zakhireMeghdarFeli = "";
        zakhireAmalgareEntekhabi = "+";
    }
});

menha.addEventListener("click", function () {
    if (zakhireMeghdarFeli !== "") {
        zakhireMeghdarGhabli = zakhireMeghdarFeli;
        zakhireMeghdarFeli = "";
        zakhireAmalgareEntekhabi = "-";
    }
});

taghsim.addEventListener("click", function () {
    if (zakhireMeghdarFeli !== "") {
        zakhireMeghdarGhabli = zakhireMeghdarFeli;
        zakhireMeghdarFeli = "";
        zakhireAmalgareEntekhabi = "/";
    }
});

clear.addEventListener("click", function () {
    zakhireMeghdarGhabli = "";
    zakhireMeghdarFeli = "";
    zakhireAmalgareEntekhabi = "";
    natije.textContent = "0";
});

result.addEventListener("click", function () {
    if (zakhireMeghdarFeli !== "" && zakhireMeghdarGhabli !== "") {
        let resultt = 0;
        const feli = parseFloat(zakhireMeghdarFeli);
        const ghabli = parseFloat(zakhireMeghdarGhabli);

        switch (zakhireAmalgareEntekhabi) {
            case "+":
                resultt = ghabli + feli;
                break;
            case "-":
                resultt = ghabli - feli;
                break;
            case "*":
                resultt = ghabli * feli;
                break;
            case "/":
                resultt = ghabli / feli;
                break;
        }

        natije.textContent = resultt;
    }
});



