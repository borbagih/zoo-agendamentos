// auth.js
// Simulação de login/logout simples

document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            alert("Logout realizado!");
            window.location.href = "index.html";
        });
    }
});
