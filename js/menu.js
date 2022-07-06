const botonMenu = (boton) => {
    boton.classList.toggle("change");
    const menu = document.getElementById('des');
    menu.classList.toggle("menu");
    const nav = document.getElementById('menu');
    nav.classList.toggle("grande");
}
