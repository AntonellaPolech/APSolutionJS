//* El simulador interactivo va a indicar el costo total de servicios seleccionados por el usuario. En mi caso utilizo un proyecto de desarrollo web de una pagina de estudio contable que contiene una seccion de "servicios" que voy a utilizar para este proyecto de JS. 

//---------------------INGRESO DEL USUARIO---------------------------
function ingresarUsuario() {
    let usuario = prompt("Ingrese usuario")
    alert("El usuario ingresar es " + usuario)
    console.log("¡Hola " + usuario + "!")
}
ingresarUsuario();

//----------------------SELECCION DE SERVICIOS y ARMADO DE CARRITO-------------------------------------
let gestionmensual = 1000;
let auditoriafiscal = 2000;
let planificacionfiscal = 3000;

let seleccionServicio = prompt("Seleccione los servicios a cotizar: gestionmensual / auditoriafiscal / planificacionfiscal").toLocaleLowerCase();

if (seleccionServicio == "gestionmensual") {
    console.log("Cotización del servicio = " + gestionmensual);
    seleccionServicio = Number(gestionmensual);
} else if (seleccionServicio == "auditoriafiscal") {
    console.log("Cotización del servicio = " + auditoriafiscal);
    seleccionServicio = Number(auditoriafiscal);
} else if (seleccionServicio == "planificacionfiscal") {
    console.log("Cotización del servicio = " + planificacionfiscal);
    seleccionServicio = Number(planificacionfiscal);
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
let costoNeto = (seleccionServicio * cantidadServicios);
let impuesto = (0.21 * costoNeto);
let costoTotal = (costoNeto + impuesto);

let finalizarCotizacion = prompt("¿Desea finalizar la cotización?")

if (finalizarCotizacion = true) {
    console.log("Total Neto = " + costoNeto);
    console.log("IVA = " + impuesto);
    console.log("Total = " + costoTotal);
} else {
    console.log("Continuar comprando")
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
