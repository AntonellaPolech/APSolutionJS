//* El simulador interactivo va a indicar el costo total de servicios seleccionados por el usuario. En mi caso utilizo un proyecto de desarrollo web de una pagina de estudio contable que contiene una seccion de "servicios" que voy a utilizar para este proyecto de JS. 

//---------------------INGRESO DEL USUARIO---------------------------
function ingresarUsuario() {
    let usuario = prompt("Ingrese usuario");
    alert("El usuario ingresar es " + usuario);
    console.log("¡Hola " + usuario + "!");
}
ingresarUsuario();

//SERVICIOS
function Productos(n, l, d, c) {
    this.nombre = n
    this.liquidacion = l
    this.detalle = d
    this.costo = Number(c)
}

const gestionMensual = new Productos("Gestión Mensual", "Mensual", "Obligaciones fiscales y contables de todo contribuyente", 20000)
const auditoria = new Productos("Auditoría Fiscal", "Anual", "Hacemos un relevamiento de todos los datos dispuestos, la información que conoce AFIP y las presentaciones realizadas", 80000)
const liquidacionSueldos = new Productos("Liquidación de Sueldos", "Mensual", "Servicio de alta de empleado, liquidación de sueldos mensual, incluyendo recibos de haberes, liquidación de cargas sociales y licencias", 40000)



function seleccionarServicio() {
    console.log('Seleccione un servicio:');
    console.log('1: Gestion Mensual');
    console.log('2: Auditoría Fiscal');
    console.log('3: Liquidación de Sueldos');
    console.log("-----------------------------");

    let op = prompt('Consulte por un servicio');
    switch (op) {
        case "1":
            console.log("Se Selecciono Gestion Mensual");
            console.log("Tipo de liquidación = " + gestionMensual.liquidacion);
            console.log("Descripción = " + gestionMensual.detalle);
            break;
        case "2":
            console.log("Se Selecciono Auditoría Fiscal");
            console.log("Tipo de liquidación = " + auditoria.liquidacion);
            console.log("Descripción = " + auditoria.detalle);
            break;
        case "3":
            console.log("Se Selecciono Liquidación de Sueldos");
            console.log("Tipo de liquidación = " + liquidacionSueldos.liquidacion);
            console.log("Descripción = " + liquidacionSueldos.detalle);
            break;
        default:
            console.log("No se ha seleccionado ningun servicio");
            seleccionarServicio()
    }
}
seleccionarServicio();
console.log("------------------------------")

//------------------------
let cotizar = prompt("¿Desea realizar una cotización?")
if (cotizar = true) {
    console.log("Se procede a la cotización")
    cotizarServicio();
} else {
    console.log("No se desea realizar una cotización");
}

//-------------------------
function cotizarServicio() {
    console.log('Servicios:');
    console.log('1: Gestion Mensual');
    console.log('2: Auditoría Fiscal');
    console.log('3: Liquidación de Sueldos');

    let seleccionServicio = prompt("Seleccione los servicios a cotizar: ");

    if (seleccionServicio === "1") {
        console.log("Cotización de " + gestionMensual.nombre + " es " + gestionMensual.costo);
        servicioElegido = gestionMensual.costo;
    } else if (seleccionServicio === "2") {
        console.log("Cotización de " + auditoria.nombre + " es " + auditoria.costo);
        servicioElegido = auditoria.costo;
    } else if (seleccionServicio === "3") {
        console.log("Cotización de " + liquidacionSueldos.nombre + " es " + liquidacionSueldos.costo);
        servicioElegido = liquidacionSueldos.costo;
    } else {
        console.log("No se indico ningún servicio");
        cotizarServicio();
    }
}

//--------------------------------COSTO TOTAL DE COTIZACIÓN--------------------------------
let cantidadServicios = prompt("Indique la cantidad de meses que desea adquirir el servicio");

for (let i = 0; i <= cantidadServicios; i++) {
    if (cantidadServicios > 0) {
        let costoNeto = servicioElegido * cantidadServicios;
        console.log("Servicio:" + servicioElegido + " Cantidad:" + cantidadServicios + " Costo Neto= " + costoNeto);
    }
    else {
        console.log("No se agregaron servicios a la cotización");
    }
}
console.log("-------------------------------------------")

/*FINALIZAR COTIZACIÓN*/
let costoNeto = (servicioElegido * cantidadServicios);
let impuesto = (0.21 * costoNeto);
let costoTotal = (costoNeto + impuesto);

let finalizarCotizacion = prompt("¿Desea finalizar la cotización?")

if (finalizarCotizacion = true) {
    console.log("Costo Neto = " + costoNeto);
    console.log("IVA = " + impuesto);
    console.log("Total = " + costoTotal);
} else {
    console.log("Continuar comprando")
}

//--------------------------------METODOS DE PAGO--------------------------------
function metodoPago() {
    console.log("Metodos de pago disponibles:");
    console.log("1: Transferencia");
    console.log("2: Tarjeta de Crédito");
    console.log("3: MercadoPago");

    let metododePago = prompt("Seleccione metodo de pago:")
    switch (metododePago) {
        case "1":
            console.log("Realizaste el pago por transferencia");
            break;
        case "2":
            console.log("Realizaste el pago con tarjeta de crédito");
            break;
        case "3":
            console.log("Realizaste el pago por MercadoPago");
            break;
        default:
            console.log("No se realizo el pago");
            metodoPago();
    }
}
metodoPago();

//Arrays
console.log("------------------------")
const tipoContribuyentes = new Array("1.Responsable Inscripto", "2.Monotributista", "3.Consumidor Final", "4.No Inscripto", "5.Exento")

console.log("Existen los siguientes tipos de contribuyentes:")
for(let i=0; i<tipoContribuyentes.length; i+=1){
    console.log(tipoContribuyentes[i])
}

//Precios de consultorias
const consultas = [
    {id: 1, contribuyente:'Responsable Inscripto', precio: 10000},
    {id: 2, contribuyente: 'Monotributista', precio: 5000},
]

//find 
console.log("--------Buscar consulta para monotributistas: ")
const buscado = consultas.find(consulta => consulta.id ===2)
console.log(buscado)

//Filter
console.log("--------Consultas mayores a $7.000: ")
const filtroPrecio = consultas.filter(consulta => consulta.precio > 7000)
console.log(filtroPrecio)

//map - actualización de precios de consulta

console.log("--------Actualización lista de precios: ")
const actualizacionConsultas = consultas.map((el) => {
    return {
        contribuyente: el.contribuyente,
        precio: el.precio * 1.35,
    }
})
console.log(actualizacionConsultas)