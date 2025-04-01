document.getElementById("btnConverter").addEventListener("click", converter);

function converter() {
    const cotacaoDolar = parseFloat(5.68); // Cotação fixa
    const valorDolar = parseFloat(document.getElementById("valorDolar").value);

    if (isNaN(valorDolar) || valorDolar <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
        return;
    }

    const valorReais = (valorDolar * cotacaoDolar).toFixed(2);
    document.getElementById("resultado").innerText = `O valor em reais é R$ ${valorReais}`;
}
