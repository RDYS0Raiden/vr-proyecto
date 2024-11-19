document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    const userRole = localStorage.getItem('userRole'); // Recuperar el rol del usuario desde localStorage

    if (username) {
        // Ocultar los botones de "Inicio de Sesión" y "Registrarse"
        const loginLink = document.getElementById('login-link');
        const registerLink = document.getElementById('register-link');
        const logoutLink = document.getElementById('logout-link');
        const estudiantesLink = document.getElementById('estudiantes-link');

        if (loginLink) loginLink.style.display = 'none';
        if (registerLink) registerLink.style.display = 'none';

        // Mostrar el botón de "Cerrar Sesión"
        if (logoutLink) logoutLink.style.display = 'block';

        // Mostrar el enlace de "Estudiantes" solo si el rol es "docente"
        if (userRole === 'docente' && estudiantesLink) {
            estudiantesLink.style.display = 'block';
        } else if (estudiantesLink) {
            estudiantesLink.style.display = 'none';
        }
    } else {
        // Si no hay sesión, ocultar "Cerrar Sesión" y "Estudiantes"
        const logoutLink = document.getElementById('logout-link');
        const estudiantesLink = document.getElementById('estudiantes-link');

        if (logoutLink) logoutLink.style.display = 'none';
        if (estudiantesLink) estudiantesLink.style.display = 'none';
    }
});

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('userRole'); // Limpiar también el rol al cerrar sesión
    window.location.href = 'index.html'; // Redirigir a la página principal
}
