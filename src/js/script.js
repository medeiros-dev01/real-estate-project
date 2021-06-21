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

//escondendo e mostrando o input do campo de pesquisa

    let input = document.getElementById("input-search");

    input.addEventListener('focus', hideInput  );
    input.addEventListener('focusout', showInput  );

    function hideInput() {
        let label = document.getElementById("label-search");

        label.style.display = "none";
    }

    function showInput() {
        let label = document.getElementById("label-search");

        label.style.display = "unset";
    }

    

