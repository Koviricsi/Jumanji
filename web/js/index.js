let isAnimating = false;


function videoButtonChange(){

    let elozetes = document.getElementById("elozetes");

    if (elozetes.classList.contains("back-hide")){
        elozetes.textContent = "Vissza";
        let icon = document.createElement("span");
        icon.classList.add("material-symbols-outlined");
        icon.innerText = "undo"
        elozetes.appendChild(icon);
    } else {
        elozetes.textContent = "Előzetes";
        let icon = document.createElement("span");
        icon.classList.add("material-symbols-outlined");
        icon.innerText = "movie"
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