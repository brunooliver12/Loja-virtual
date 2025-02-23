// Função de envio de formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    alert(`Obrigado, ${email}! Sua mensagem foi enviada com sucesso.`);

    alert(`Obrigado, ${message}! Sua mensagem foi enviada com sucesso.`);


    // Limpa o formulário
    this.reset();
});
