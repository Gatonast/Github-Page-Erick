const hora = document.getElementById('hour')
const minuto = document.getElementById('minute')
const segundo = document.getElementById('second')

const relogio = setInterval(function time()
{
    let dateToday = new Date()      
  let hr = dateToday.getHours().toString().padStart(2, '0');
let min = dateToday.getMinutes().toString().padStart(2, '0');
let s = dateToday.getSeconds().toString().padStart(2, '0');
    
    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = s
}
)
