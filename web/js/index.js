let isAnimating = false;
let elozetes = document.getElementById("elozetes");

function videoButtonChange(){

    if (elozetes.classList.contains("back-hide")){
        elozetes.textContent = "Vissza";
        let icon = document.createElement("span");
        icon.classList.add("material-symbols-outlined");
        icon.innerText = "undo";
        elozetes.appendChild(icon);
    } else {
        elozetes.textContent = "Előzetes";
        let icon = document.createElement("span");
        icon.classList.add("material-symbols-outlined");
        icon.innerText = "movie";
        elozetes.appendChild(icon);
    };

    elozetes.classList.toggle("back-hide");

};

function videoContent(){

    let section = document.getElementById("focim");
    let vplayer = document.getElementById("vplayer");

    if (section.style.opacity > 0){

        vplayer.style.display = "block";
        Fade(section, vplayer, true, () => {
            section.style.display = "none";
            vplayer.muted = false;
            isAnimating = false;
        });        
    } else {

        section.style.display = "flex";
        Fade(section, vplayer, false, () => {
            vplayer.style.display = "none";
            vplayer.muted = true;
            vplayer.pause();
            isAnimating = false;
        });
        
    };
};

function Fade(section, vplayer, direction, callback){

    const timer = setInterval(() => {

        if (direction && section.style.opacity > 0) {

            section.style.opacity = parseFloat(section.style.opacity) - 0.01;
            vplayer.style.opacity = parseFloat(vplayer.style.opacity) + 0.01;

          } else if (!direction && vplayer.style.opacity > 0) {

            section.style.opacity = parseFloat(section.style.opacity) + 0.01;
            vplayer.style.opacity = parseFloat(vplayer.style.opacity) - 0.01;

          } else {
            clearInterval(timer);
            if (callback) callback();
          };

    }, 1);

    return;
};


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