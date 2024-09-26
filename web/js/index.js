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
    
};