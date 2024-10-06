let navIsOpen = false;
let navDivs = document.querySelectorAll("nav div");
let button = document.getElementById("navbutton");

function navButton(){
    if (!navIsOpen){
        navOpen();
    } else {
        navClose();
    }
};

function navOpen(){
    button.setAttribute("src","../src/img/menu_open.png");
    navDivs.forEach((element) => {
        element.style.transform = "translateX(0)";
    });
    navIsOpen = true;
};

function navClose(){
    button.setAttribute("src","../src/img/menu.png")
    navDivs[0].style.transform = "translateX(-200vw)";
    navDivs[1].style.transform = "translateX(-300vw)";
    navDivs[2].style.transform = "translateX(-400vw)";
    navIsOpen = false;
};

window.onresize = () => {
    if (window.innerWidth > 768){
        navOpen();
    } else {
        navClose();
    };
};