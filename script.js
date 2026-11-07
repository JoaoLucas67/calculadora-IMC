
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0 ||
        !Number.isFinite(peso) || !Number.isFinite(altura)) {

        document.getElementById("resultado").textContent =
            "Informe valores válidos!";

        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";

    } else if (imc < 25) {
        classificacao = "Peso adequado";

    } else if (imc < 30) {
        classificacao = "Sobrepeso";

    } else if (imc < 35) {
        classificacao = "Obesidade grau I";

    } else if (imc < 40) {
        classificacao = "Obesidade grau II";

    } else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById("resultado").textContent =
        nome + ", seu IMC calculado é: " + imc.toFixed(2) +
        "\nClassificação (referência para adultos): " + classificacao;

});
