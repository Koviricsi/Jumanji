let alap = document.getElementById("szereplok");
let temp = document.getElementById("temp");
let temp2 = document.createElement("template");
let test = document.getElementById("test");

function Gomb_nyomas(){
    if (alap.tagName() == "div") {
        temp2.innerHTML = alap.innerHTML;
        alap.remove()
        
    };
};