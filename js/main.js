//* El simulador interactivo va a indicar el costo total de servicios seleccionados por el usuario. En mi caso utilizo un proyecto de desarrollo web de una pagina de estudio contable que contiene una seccion de "servicios" que voy a utilizar para este proyecto de JS. 

//---------------------INGRESO DEL USUARIO---------------------------
function ingresarUsuario() {
    let usuario = prompt("Ingrese usuario");
    alert("El usuario ingresar es " + usuario);
    console.log("¡Hola " + usuario + "!");
}

ingresarUsuario();
//----------------------SELECCION DE SERVICIOS y ARMADO DE CARRITO-------------------------------------
let gestionMensual = 1000 ; 
let auditoriaFiscal = 2000 ;
let planificacionFiscal = (gestionMensual + auditoriaFiscal);

let seleccionServicio = prompt("Seleccione los servicios a cotizar: gestionMensual; auditoriaFiscal ó planificacionFiscal").toLocaleLowerCase();

if (seleccionServicio == "gestionMensual") {
    console.log("Cotización del servicio = " + gestionMensual);
} else if (seleccionServicio == "auditoriaFiscal") {
    console.log("Cotización del servicio = " + auditoriaFiscal);
} else if (seleccionServicio == "planificacionFiscal") {
    console.log("Cotización del servicio = " + planificacionFiscal);
} else {
    console.log("No se indico ningún servicio");
}


const cantidadServicios = Number(prompt("Indique la cantidad por servicio"));
console.log("Se agregaron " + cantidadServicios + " a la cotización")

//--------------------------------COSTO TOTAL DE COTIZACIÓN--------------------------------
let costoServicio = Number(seleccionServicio);


for (let i = 0; i <= cantidadServicios; i++) {
    if (cantidadServicios > 0) {
        let costoTotal = seleccionServicio * cantidadServicios;
        console.log("Servicio:" + seleccionServicio + " Cantidad:" + cantidadServicios + " Costo total= " + costoTotal);
    }
    else {
        console.log("No se agregaron servicios a la cotización");
    }
}

/*FINALIZAR COTIZACIÓN*/
let costoTotal = seleccionServicio * cantidadServicios;

if (finalizarCotizacion = true) {
    console.log("El costo final cotizado es " + costoTotal);
} else{
    console.log ("Continuar comprando")
}

//--------------------------------METODOS DE PAGO--------------------------------
const metodoPago = prompt("Seleccione metodo de pago (efectivo ó tarjeta)")

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
