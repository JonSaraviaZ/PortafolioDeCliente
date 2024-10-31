//Funcionalidad de la selección del botón abrir y cerrar de menú
const nav = document.querySelector("#nav");
const navElems = document.querySelectorAll(".navegacion__elemento a");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

navElems.forEach(elem => {
    elem.addEventListener("click", () => {
        nav.classList.remove("visible");
    })
})

// Función para abrir el cliente de correo con el correo predefinido
// function sendEmail() {
//     const email = document.getElementById('email').textContent;
//     window.location.href = `mailto:${email}`;
// }

// // Función para copiar la dirección de correo al portapapeles
// function copyEmail() {
//     const email = document.getElementById('email').textContent;

//     // Crear un elemento temporal para copiar el correo
//     const tempInput = document.createElement('input');
//     tempInput.value = email;
//     document.body.appendChild(tempInput);
//     tempInput.select();
//     document.execCommand('copy');
//     document.body.removeChild(tempInput);

//     // Mostrar mensaje de éxito
//     const message = document.getElementById('message');
//     message.classList.remove('hidden');
//     setTimeout(() => {
//         message.classList.add('hidden');
//     }, 2000);
// }

document.getElementById("whatsappButton").addEventListener("click", function() {
    const phoneNumber = "56999137418"; // Reemplaza con tu número de teléfono, en formato internacional (sin el '+')
    const message = "Hola, me gustó tu Portafolio, conversemos y trabajemos juntos.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
});









//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
