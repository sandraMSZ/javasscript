function limpiar(){
    document.getElementById("Nota1").value="";
    document.getElementById("Nota2").value="";
    document.getElementById("Nota3").value="";
    document.getElementById("Nota4").value="";

}
function promedio(){
    var n1=document.getElementById("Nota1").value;
    var n1=document.getElementById("Nota2").value;
    var n1=document.getElementById("Nota3").value;
    var Definitiva=(parseFloat(n1)+parseFloat(n3))/3;
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}