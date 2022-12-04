var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .icones');
var iconMenu = document.querySelector('nav .icones img');

menuBar.addEventListener('click',function(){
    if (iconMenu.getAttribute("src") == 'menu.png'){
        iconMenu.setAttribute("src","close.png")
    }else{
        iconMenu.setAttribute("src","menu.png")
    }

    menu.classList.toggle('active')
})