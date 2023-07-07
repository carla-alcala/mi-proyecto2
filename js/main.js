const nav = document.querySelector (#nav);
const abrir = document.querySelector (#abrir);
const cerrar = document.querySelector(#cerrar);

abrir.addEventListerner("click", ()=> {
    nav.classList.add("visible");
})

cerrar.addEventListerner ("click", ()=> {
    nav.classList.remove ("visible");
})