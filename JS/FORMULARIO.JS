document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const inputs = document.querySelectorAll(".input-box input");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // evita que recargue la página

        const usuario = inputs[0].value.trim();
        const correo = inputs[1].value.trim();
        const password = inputs[2].value.trim();

        if (usuario === "" || correo === "" || password === "") {
            alert("⚠️ Completa todos los campos");
            return;
        }

        // validación básica de email
        if (!correo.includes("@")) {
            alert("⚠️ Correo inválido");
            return;
        }

        alert("✅ Validación correcta");

        // redirigir
        window.location.href = "folder/perfil.html";
    });
    

});
