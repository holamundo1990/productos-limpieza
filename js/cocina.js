document.addEventListener('DOMContentLoaded', () => {

    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    function cargarCarritoDesdeLocalStorage() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        mostrarCarrito(carrito);
    }

    function guardarCarritoEnLocalStorage(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function mostrarCarrito(carrito) {
        listaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)} <button class="eliminar-item" data-nombre="${producto.nombre}">Eliminar</button>`;
            listaCarrito.appendChild(li);
            total += producto.precio;
        });

        totalElemento.textContent = `$${total.toFixed(2)}`;
    }

    document.querySelectorAll('.boton-agregar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const nombre = e.target.dataset.nombre;
            const precio = parseFloat(e.target.dataset.precio);
            const producto = { nombre, precio };
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(producto);
            guardarCarritoEnLocalStorage(carrito);
            mostrarCarrito(carrito);
            alert(`${nombre} ha sido agregado al carrito.`);
        });
    });

    listaCarrito.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar-item')) {
            const nombre = e.target.dataset.nombre;
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const index = carrito.findIndex(p => p.nombre === nombre);
            if (index > -1) carrito.splice(index, 1);
            guardarCarritoEnLocalStorage(carrito);
            mostrarCarrito(carrito);
        }
    });

    cargarCarritoDesdeLocalStorage();

    const track = document.querySelector('.carrusel-track');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let index = 0;

    function moverCarrusel() {
        const item = document.querySelector('.carrusel-item');
        const itemWidth = item.offsetWidth + 10; 
        const container = document.querySelector('.carrusel-container');
        const visibleItems = Math.floor(container.offsetWidth / itemWidth);
        const maxIndex = track.children.length - visibleItems;
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    prevBtn.addEventListener('click', () => { index--; moverCarrusel(); });
    nextBtn.addEventListener('click', () => { index++; moverCarrusel(); });
    window.addEventListener('resize', moverCarrusel);
    moverCarrusel();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
