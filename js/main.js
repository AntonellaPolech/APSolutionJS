//* El simulador interactivo va a indicar el costo total de servicios seleccionados por el usuario. En mi caso utilizo un proyecto de desarrollo web de una pagina de estudio contable que contiene una seccion de "servicios" que voy a utilizar para este proyecto de JS. 
//---------------------INGRESO DEL USUARIO---------------------------
function ingresarUsuario (){
    let usuario = prompt ("Ingrese usuario")
    alert ("El usuario ingresar es " + usuario)
    console.log ("¡Hola " + usuario + "!")
}

ingresarUsuario();



//----------------------SELECCION DE SERVICIOS y ARMADO DE CARRITO-------------------------------------
let servicio1 = Number(1000);
let servicio2 = Number(2000);
let variable1= Number(servicio1+servicio2);

let seleccionServicio = prompt("Seleccione los servicios a cotizar: servicio1; servicio2 ó variable1").toLocaleLowerCase();

if(seleccionServicio == "servicio1"){
    console.log("Cotización del servicio = " + servicio1);
    seleccionServicio = Number(servicio1);
} else if(seleccionServicio == "servicio2"){
    console.log("Cotización del servicio = " + servicio2);
    seleccionServicio = Number(servicio2);
} else if(seleccionServicio == "variable1"){
    console.log("Cotización del servicio = " + variable1);
    seleccionServicio = Number(variable1);
} else {
    console.log("No se indico ningún servicio");
}



//--------------------------------COSTO TOTAL DE COTIZACIÓN--------------------------------
const cantidadServicios = Number(prompt("Indique la cantidad por servicio"));

let costoServicio = Number(seleccionServicio);

for (let i = 0; i <= cantidadServicios; i++);{
    if(cantidadServicios > 0){
        let costoTotal = seleccionServicio * cantidadServicios;
        console.log("Servicio:" + seleccionServicio + " Cantidad:" + cantidadServicios + " Costo total= " + costoTotal);
    }
}

//--------------------------------METODOS DE PAGO--------------------------------
const metodoPago = prompt("Seleccione metodo de pago")

switch (metodoPago.toLowerCase()) {
    case "efectivo":
        console.log("Realizaste el pago en efectivo");
        break;
    case "tarjeta":
        console.log("Realizaste el pago con Tarjeta");
        break;
    default:
        console.log("No se realizo el pago");
        break;
}
