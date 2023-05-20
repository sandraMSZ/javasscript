function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");// Asigna dato ingresado x teclado
    filter = input.value.toUpperCase(); // Convertir texto a mayúscula
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr"); //Asigna todas las filas a un arrays[]
    for (i = 0; i < tr.length; i++) { // Recorriendo todas las filas de la tabla
        td = tr[i].getElementsByTagName("td")[0]; // Especificamente en la columna 0=Nombre pelicula
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) { //Busca el nombre pelicula en la tabla
                tr[i].style.display = ""; //muestra pelicula completa linea
            } else {
                tr[i].style.display = "none"; // oculta lineas de la tabla
            }
        }
    }
}