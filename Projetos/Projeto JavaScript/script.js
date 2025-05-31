function insert(num){
    document.getElementById('result').innerHTML += num;
}
function clean()
{
    document.getElementById('result').innerHTML = '';
}

function back()
{
    var exp = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = exp.substring(0, exp.length - 1);
}

function calcular()
{
    var exp = document.getElementById('result').innerHTML;
    if (exp) {
        try {
            document.getElementById('result').innerHTML = eval(exp);
        } catch (e) {
            document.getElementById('result').innerHTML = "Erro";
        }
    }
}

