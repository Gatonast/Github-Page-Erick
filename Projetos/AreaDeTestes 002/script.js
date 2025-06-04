
var n1 = Number(prompt('digite sua primeira nota'))
var n2 = Number(prompt('digite sua segunda nota'))
resultado = (n1 + n2) / 2;

if (resultado >= 5)
{
    alert("Parebens, voce passou")
}
else{
    alert("Não foi dessa vez")
}
alert(`Sua media é ${resultado}`)