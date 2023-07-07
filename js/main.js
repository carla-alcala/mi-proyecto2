const nav = document.querySelector ("#nav");
const abrir = document.querySelector ("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListerner("click" , () => {
    nav.classList.add("visible");
})

cerrar.addEventListerner ("click" , () => {
    nav.classList.remove ("visible");
})
let num1 = 20;
let num2 = 7;
let resultado = num1 + num2;
console:log(resultado);