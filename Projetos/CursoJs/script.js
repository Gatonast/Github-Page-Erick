const enviar = document.getElementById('calcular')

function calc()
{
    const nome = document.getElementById("nome").value; 
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (nome !== "" && (altura) && (peso)) {
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        resultado.textContent = valorIMC;

        let classificacao = ''

        if (valorIMC < 18.5)
        {
            classificacao = 'abaixo do peso.'
        }
        else if (valorIMC < 25)
        {
            classificacao = 'Com peso ideal, parabéns!!'
        }
           else if (valorIMC < 29)
        {
            classificacao = 'Você está com sobrepeso'
        }
           else if (valorIMC > 30)
        {
            classificacao = 'Está OBESO'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`


    }
    else
    {
        resultado.textContent = "Preencha todos os campos corretamente!";
    }
}

enviar.addEventListener("click", calc);
