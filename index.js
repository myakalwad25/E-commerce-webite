let mnu = document.querySelector("#menu");
let cross_btn = document.querySelector(".close_btn");
let mb = document.querySelector(".menu_btn");
function open_menu() {
   // alert ("open World!");
    mnu.classList.remove("not_vis");
    mnu.classList.add("vis");
    
    
}
function close_menu() {
   // alert("closed clicked");
    mnu.classList.remove("vis");
    mnu.classList.add("not_vis");
}

mb.addEventListener("click",open_menu);
cross_btn.addEventListener("click",close_menu);
