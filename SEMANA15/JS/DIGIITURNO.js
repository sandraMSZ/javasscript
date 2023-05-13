function prefer(){
    let num=1;// primer digiturno EPS
    let res=true;//confirmacion de sigguiente turno 
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRTE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementar turno
            
        }else{
            alert("ERROR EN TURNO...");
            break;
        }
    }
}
function user(){
    let num=1;// primer digiturno EPS
    let res=true;//confirmacion de sigguiente turno 
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRTE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementar turno
            
        }else{
            alert("ERROR EN TURNO...");
            break;
        }
    }
}