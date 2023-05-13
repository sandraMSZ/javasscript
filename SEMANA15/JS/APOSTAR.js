function apostar(){
    //Gener numero aleatorio con metodo matematico random
    var a=Math.round(Math.random()*10);//Generar numero random
    document.getElementById("resultodo").value=a;
    //Asignar numero ingresado al azar
    var b=document.getElementById("apostado").value;
    if(a==b){
        document.getElementById("salida").value="Ganó";
    }else{
        document.getElementById("salida").value="Perdió";
    }
}
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
}