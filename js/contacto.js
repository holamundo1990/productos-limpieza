document.addEventListener('DOMContentLoaded', () => {
    const formContacto = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');

    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simula un envío exitoso del formulario
        formContacto.reset();
        mensajeExito.classList.remove('hidden');

        // Oculta el mensaje de éxito después de 5 segundos
        setTimeout(() => {
            mensajeExito.classList.add('hidden');
        }, 5000);
    });
});