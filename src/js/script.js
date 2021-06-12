// toggle menu responsivo
let btnShowMenu = document.getElementById('icon-bars');

btnShowMenu.addEventListener('click', showMenu);

//função que mostra e esconde o menu 
function showMenu() {
    
    let navbarList = document.querySelector(".header__nav ul");
    if(navbarList) {
        navbarList.classList.toggle("visible");
    }
}




