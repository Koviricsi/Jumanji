let szereplok = document.getElementById("szereplok");
let temp = document.getElementById("temp");
let valtozas = false

function Gomb_nyomas(){
    if (!valtozas){
        szereplok.style.display = "none"
        temp.style.display = "flex"
        valtozas = true
    } else {
        szereplok.style.display = "flex"
        temp.style.display = "none"
        valtozas = false
    }
};