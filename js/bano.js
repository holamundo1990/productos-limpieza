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

        carrito.forEach((producto, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>${producto.nombre}</strong> - $${producto.precio.toFixed(2)}</span>
                <button class="eliminar-item" data-index="${index}">❌</button>
            `;
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

            const msg = document.createElement('div');
            msg.textContent = `${nombre} agregado al carrito ✅`;
            msg.className = "toast-msg";
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 2000);
        });
    });

    listaCarrito.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar-item')) {
            const index = e.target.dataset.index;
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            carrito.splice(index, 1);

            guardarCarritoEnLocalStorage(carrito);
            mostrarCarrito(carrito);
        }
    });

    cargarCarritoDesdeLocalStorage();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
