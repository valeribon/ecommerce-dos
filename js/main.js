
// Usuario ingresa datos del producto y se crea un objeto prod1 a partir de esos inputs.
let listaProductos = [];
function crearprod() {
    let numero = prompt("Ingrese el ID del Producto");
    let nombre = prompt("Ingrese el nombre del Producto");
    let size = prompt("Ingrese el tamaño del producto");
    let precioDisco = prompt("Ingrese el precio del producto en los supermercados Disco, si no lo conoce digite z.");
    let precioDevoto = prompt("Ingrese el precio del producto en los supermercados Devoto, si no lo conoce digite z.");
    let precioTinglesa = prompt("Ingrese el precio del producto en los supermercados Tienda Inglesa, si no lo conoce digite z.");
    // let mensajeInput = alert(`Ud ha ingresado el producto: ${nombre}\n Tamaño: ${size}\n Precio de Disco: ${precioDisco}\n Precio en Devoto: ${precioDevoto}\n Precio en T. Inglesa: ${precioTinglesa}`);
    // alert(mensajeInput); 

    //Ingresa producto a una lista de productos

    //Un objeto Ejemplo
    const prod1 = {
        numero: numero,
        nombre: nombre,
        size: size,
        precioDisco: precioDisco,
        precioDevoto: precioDevoto,
        precioTienda: precioTinglesa,
    };
    // Confirmar los datos
    
    let confirmdatos = prompt(`ATENCION!\nINGRESANDO A LA BASE DE DATOS: ${prod1.numero}, ${prod1.nombre}, ${prod1.size} y sus respectivos precios\n\nDigite "Y" para ingresar los datos a la base de datos o "N" para cancelar`);
    if (confirmdatos == "Y" || "y") {
        alert(`Usted eligio Y`);
        listaProductos.push(prod1.numero);
        alert(`Los datos han sido ingresados`);
    } else if (confirmdatos == "N" || "n") { 
        alert("Ha cancelado la operacion, vuelva a introducir el producto");
    } else {
        alert("Input no reconocido");
    };
    alert(`ID de los productos ingresados hasta ahora ${listaProductos}`);
}

//Inicio de Funcion Buscar
function buscar(){
    let idprod = prompt("Ingrese ID de producto que desea Buscar. Si no lo conoce, digite N para buscar por nombre")
    if (idprod != "N") {
        alert(`Buscando Producto con ID: ${idprod}`);
        for (let i = 0; i < listaProductos.length; i++) {
            if (idprod == listaProductos[i]) {
                alert("El producto se encuentra en la base de datos");
                break;
            } else {
                // alert("No se encontraron productos con ese ID");
                continue;
            };
        }
    } else if (idprod == "N") {
        let nombrebusc = prompt("Ingrese nombre del producto que desea buscar");
        alert(`Buscando producto con nombre: ${nombrebusc}`);
    }
}


// Ejecuta el Menu para elegir la fucnionalidad de Buscar o crear un producto

function mainMenu(){
    let menu = prompt("Bienvenido al buscador y comparador de precios. Digite:\n  - 1 Buscar un precio.\n - 2 Ingresar un producto.\n - 0 para Salir");
    while(menu != "0"){
        switch(menu) {
            case "1":
                alert("Todavia no esta hecho!");
                buscar();       
                break;
            case "2":
                crearprod();
                break;
            // case "0":
            //     break;
            default:
                alert(`Ingrese un numero del Menu`);
        }
        menu = prompt("Bienvenido al buscador y comparador de precios. Digite:\n  - 1 Buscar un precio.\n - 2 Ingresar un producto.\n - 0 para Salir");
    }   
}

//Invoca la funcion del Menu
mainMenu();


