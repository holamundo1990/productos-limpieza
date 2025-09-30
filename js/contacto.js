document.addEventListener('DOMContentLoaded', () => {
    const formContacto = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');

    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();

        formContacto.reset();
        mensajeExito.classList.remove('hidden');

        setTimeout(() => {
            mensajeExito.classList.add('hidden');
        }, 5000);
    });
});
