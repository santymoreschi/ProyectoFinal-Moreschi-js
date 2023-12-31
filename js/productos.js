//MENU DESPLEGABLE
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
const openModalButtons = document.querySelectorAll('.open-modal-button');
openModalButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const productId = parseInt(event.target.getAttribute('data-product-id'));
        const product = products.find((p) => p.id === productId);
        if (product) {
            openModal(product);
        }
    });
});
function loadCartFromLocalStorage() {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
        cartItems = JSON.parse(cartItemsString);
    }
}
//Productos en el carrito
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    const productToAdd = products.find((product) => product.id === productId);
    
    if (productToAdd) {
        const productFound = cartItems.find(i => i.id == productToAdd.id)
        if (productFound) {
            const productFoundIndex = cartItems.findIndex(i => i.id == productToAdd.id)
            cartItems[productFoundIndex].quantity ++
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }else{
            cartItems.push(productToAdd)
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        event.target.classList.add('added-to-cart');
        setTimeout(() => {
            event.target.classList.remove('added-to-cart');
        }, 1000);
    } else {
        console.log("Producto no encontrado.");
    }
    loadCartFromLocalStorage();
    showProducts();
}

//Productos disponibles en la tienda del index
const products = [
    { id: 1, name: 'Smartphone', category: 'Electrónicos', price: 300, image: '../img/smartphone.jpg', quantity: 1 },
    { id: 2, name: 'Smart TV', category: 'Electrónicos', price: 800, image: '../img/smart.jpg',quantity: 1 },
    { id: 3, name: 'Laptop', category: 'Electrónicos', price: 1200, image: '../img/laptop.jpg',quantity: 1 },
    { id: 4, name: 'Tablet', category: 'Electrónicos', price: 250, image: '../img/tablet.jpg',quantity:1 },
    { id: 5, name: 'Auriculares', category: 'Electrónicos', price: 250, image: '../img/auriculares.jpg',quantity: 1},
    { id: 6, name: 'Smart tv samsung', category: 'Electrónicos', price: 750, image: '../img/smartsamsung.jpg',quantity: 1 },
    { id: 7, name: 'Cascos VR ps5', category: 'Electrónicos', price: 1250, image: '../img/vr.jpg',quantity: 1 },
    { id: 8, name: 'Smartwaches', category: 'Electrónicos', price: 750, image: 'https://http2.mlstatic.com/D_NQ_NP_771823-MLA45810691826_052021-O.webp',quantity: 1 },
    { id: 9, name: 'Tablet Samsung Tab A7', category: 'Electrónicos', price: 538, image: 'https://http2.mlstatic.com/D_NQ_NP_639004-MLU69482268920_052023-O.webp',quantity: 1 },
    { id: 10, name: 'Mando ps4', category: 'Electrónicos', price: 290, image: 'https://http2.mlstatic.com/D_NQ_NP_686753-MLU69972650035_062023-O.webp',quantity: 1 },
];
let filteredProducts = products.slice();

function showProducts() {
    const productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';
    filteredProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const isProductInCart = cartItems.some((item) => item.id === product.id);
        // const addButtonClass = isProductInCart ? 'add-to-cart-button disabled' : 'add-to-cart-button';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="height: 150px; object-fit: cover;">
            <h3>${product.name}</h3>
            <p>Categoría: ${product.category}</p>
            <p>Precio: $${product.price}</p>
            <button class="add-to-cart-button btn btn-primary" data-product-id="${product.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Añadir al carrito</button>
        `;
        const openModal = document.getElementById('openModal');
        
        productListDiv.appendChild(productCard);
    });
    //"Añadir al carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    });
    
    const openModalButtons = document.querySelectorAll('.open-modal-button');
    openModalButtons.forEach((button) => {
        button.addEventListener('click', () => {
        openModal(products);
        });
    })
}
//Modal
function openModal(product) {
    const modal = document.getElementById('myModal');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductCategory = document.getElementById('modalProductCategory');
    const modalProductPrice = document.getElementById('modalProductPrice');
    modalProductName.textContent = product.name;
    modalProductImage.src = product.image;
    modalProductCategory.textContent = `Categoría: ${product.category}`;
    modalProductPrice.textContent = `Precio: $${product.price}`;
    modal.style.display = 'block';
    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    S});
    }
//Buscador de Productos por nombre
function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const foundProduct = products.find((product) =>
        product.name.toLowerCase() === searchTerm
    );
    if (foundProduct) {
        filteredProducts = [foundProduct];
    } else {
        filteredProducts = products.slice();
    }
    showProducts();
}
showProducts();
//funciones para el menu del index
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});