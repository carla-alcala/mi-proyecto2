let nav = document.querySelector ("#nav");
let abrir = document.querySelector ("#abrir");
let cerrar = document.querySelector("#cerrar");

abrir.addEventListerner ("click" , () => {
    nav.classList.add ("visible");
})

cerrar.addEventListerner ("click" , () => {
    nav.classList.remove ("visible");
})
let num1 = 23;
let num2 = 7;
let resultado = num1 + num2;
console.log(resultado);