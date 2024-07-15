function verificarNumero() {
    const numero = parseFloat(document.getElementById('numero').value);
    let mensagem;

    if (isNaN(numero)) {
        mensagem = "Por favor, insira um número válido.";
    } else if (numero > 0) {
        mensagem = "O número é positivo.";
    } else if (numero < 0) {
        mensagem = "O número é negativo.";
    } else {
        mensagem = "O número é zero.";
    }

    document.getElementById('resultado').innerHTML = mensagem;
}
