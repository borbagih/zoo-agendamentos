// form.js
// Envio de reservas para Google Sheets (simulação)

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservaForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const reserva = {
                gestor: document.getElementById("gestor").value,
                sala: document.getElementById("sala").value,
                data: document.getElementById("data").value,
                horaInicio: document.getElementById("horaInicio").value,
                horaFim: document.getElementById("horaFim").value,
                obs: document.getElementById("obs").value
            };

            console.log("Reserva enviada:", reserva);
            alert("Reserva enviada com sucesso!");

            form.reset();
        });
    }
});
