var Botonlis4 = document.getElementById("listBoton4");
var Boton4 = document.getElementById("boton4");


function desplegarBoton4 (){
	Botonlis4.classList.add("mostrar");
}


function ocultarBoton4() {
    Botonlis4.classList.remove("mostrar");
}


boton4.addEventListener("mouseover",desplegarBoton4,true);
boton4.addEventListener("mouseout", ocultarBoton4, true);
