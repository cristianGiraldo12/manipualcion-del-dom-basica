const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

/* 
form.addEventListener("submit", sumarInputs)

function sumarInputs (event){
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs; 
} */

btn.addEventListener("click", sumarInputs);

function sumarInputs(event){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "resultado: " + sumaInputs;
}