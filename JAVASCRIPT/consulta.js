let consultarH = document.getElementById("consultarH");
let consultarI = document.getElementById("consultarI");
let volverC = document.getElementById("volverC");

volverC.onclick = function() {
    let userRole = sessionStorage.getItem("userRole");

    if (userRole === "admin") {
        window.location.href = "admin.html";
    } else if (userRole === "almacenista") {
        window.location.href = "almacenista.html";
    } else {
        // Redirige a una página de inicio de sesión si no hay un rol establecido
        window.location.href = "login.html";
    }
}

