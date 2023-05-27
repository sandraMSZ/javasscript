function openMenu(){
    document.getElementById("mainMenu").style.width="480px";
    document.getElementById("mainMenu").style.width="flex";
    document.getElementById("mainMenu").style.width="1000px";
    document.getElementById("openMenu").style.width="none";
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px";
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload();
}
