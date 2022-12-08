function calcImc(a, p){
    let altura = parseFloat(document.getElementById(a).value);
    let peso = parseFloat(document.getElementById(p).value);
    let result = (peso / (altura * altura)).toFixed(2);

    if (result < 18.5)
        data = {
            icon: 'warning',
            title: 'Magreza!',
            text: `Seu IMC de ${result} pontos é um resultado abaixo do recomendado!`
        }
    else if (result >= 18.5 && result < 24.9)
        data = {
            icon: 'success',
            title: 'Normal!',
            text: `Seu IMC de ${result} pontos é um resultado dentro do recomendado!`
        }
    else if (result >= 25 && result < 29.9) 
        data = {
            icon: 'info',
            title: 'Sobrepeso!',
            text: `Seu IMC de ${result} pontos é um resultado um pouco acima do recomendado!`
        }
    else if (result >= 30 && result < 39.9) 
        data = {
            icon: 'warning',
            title: 'Obesidade!',
            text: `Seu IMC de ${result} pontos é um resultado muito acima do recomendado!`
        }
    else if (result >= 40)
        data = {
            icon: 'error',
            title: 'Obesidade grave!',
            text: `Seu IMC de ${result} pontos é um resultado que extrapola o recomendado!`,
            footer: 'Procure ajuda médica com urgência!!'
        }
    else
        data = {
            icon: 'question',
            title: 'Erro!',
            text: 'Verifique se digitou corretamente os valores!'
        }

    Swal.fire(data)
}