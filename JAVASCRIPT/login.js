let ingresar = document.getElementById("ingresar");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

ingresar.onclick = function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "admin" && password === "1234") {
        sessionStorage.setItem("userRole", "admin");
        window.location.href = "admin.html";
    } else if (username === "almacenista" && password === "1234") {
        sessionStorage.setItem("userRole", "almacenista");
        window.location.href = "almacenista.html";
    } else {
        alert("Credenciales incorrectas. Por favor, intenta nuevamente.");
    }
}