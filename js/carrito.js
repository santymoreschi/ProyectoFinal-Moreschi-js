//menu responsive
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});



/*
//Saludo
function saludar() {
    alert("Sección de carrito");
    alert("esperamos que hayas tomado nota de los articulos con sus precios para que puedas verificar tus gastos!! COMENCEMOS: ")
}

//Acumulador de productos
let resultado = 0;
let ticket = "Detalle de la Compra:";
let rta = "";

do {
let producto = prompt("ingrese el nombre del producto:");
let precio = Number(prompt("ingrese el valor del producto: "))


if (producto && precio && !isNaN(precio)) {
resultado += precio;
ticket += "\n" + producto + "\t$" + precio.toFixed(2);
rta = prompt("¿Desea salir? (Ingrese 'SI' para salir.)").toUpperCase();
} else {
alert("Ingrese valores válidos para el nombre y el precio del producto.");
}
} while (rta !== "SI");
alert(ticket + "\nTotal: $" + resultado.toFixed(2));



//Saludo
function saludar() {
alert("Bienvenido a Games Market");
alert("A continuación te pediremos que ingreses algunos datos para poder darte una experiencia grandiosa");
alert("Recuerda que toda esta informacion es 100% confidencial y con objetivos de brindar la mejor asistencia para su comodidad");
alert("Recuerda tambien tomar nota de las compras que incluyas en el carrito para que puedas asegurar los gastos que estas por realizar");
}
saludar();*/