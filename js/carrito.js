//MENU DESPLEGABLE
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
const carritoContainer = document.getElementById("carritoContainer" , "eliminarProdcuto")
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
console.table(cartItems);
const setCartItems = new Set(cartItems)
console.table(setCartItems);
if (cartItems.length > 0) {
    carritoContainer.innerHTML = ''
    cartItems.forEach(i =>{
    carritoContainer.innerHTML +=`<img src="${i.image}" alt="${i.name}" style="height: 150px; object-fit: cover;">
    <h3>${i.name}</h3>
    <p>Categoría: ${i.category}</p>
    <p>Cantidad: ${i.quantity}</p>
    <p>Precio: $${i.price * i.quantity}</p>
    
`
})
}else{
    carritoContainer.innerHTML = `<h1>Vaya, parece que todavía no has agregado productos al carrito</h1>`
}
/*
let Eliminar = carritoContainer.querySelector(".delete-product")
Eliminar.addEventListener("click", () => {
    eliminarProdcuto(producto.id);
})
const eliminarProdcuto = (id) => {
    const foundId = carrito.find((Element) => Element.id === id);

    console.table(foundId);

    carrito = carrito.filter((carritoid) => {
        return carritoid !== foundId;
    });
}*/
/*
<button type="button" className={Styles.eliminar} onClick={() => eliminarProdcuto(producto.id)}>Eliminar Producto</button>

const eliminarProdcuto = (id) => {
    console.table(id);
}

return (
    <component {
        eliminarProdcuto={eliminarProdcuto}
    }
    />
)*/