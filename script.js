
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();


    let nome = document.getElementById("nome").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);



    if (peso <= 0 || altura <= 0 ||
        !Number.isFinite(peso) || !Number.isFinite(altura)) {

        document.getElementById("resultado").innerHTML =
            "Informe valores válidos!";

        return;
    }


    let imc = peso / (altura * altura);


    document.getElementById("resultado").innerHTML =
        nome + ", seu IMC calculado é: " + imc.toFixed(2);

});
