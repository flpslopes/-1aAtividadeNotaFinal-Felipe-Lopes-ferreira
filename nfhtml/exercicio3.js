function validarFormulario() {
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    if (email.includes('@') && email.includes('.')) {
        messageElement.textContent = "Formulário enviado com sucesso!";
        messageElement.style.color = "green";
        return true;
    } else {
        messageElement.textContent = "Por favor, insira um email válido!";
        messageElement.style.color = "red";
        return false;
    }
}
