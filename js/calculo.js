
function calcDiarias() {
    let hosp = document.getElementById('hospedes').value
    let day = document.getElementById('priceDia').value
    let dias = document.getElementById('dias').value
    let hosp2 = 0

    if (hosp == '1') {
        hosp2 = 1
    } else if (hosp == '2') {
        hosp2 = 1.2
    } else if (hosp == '3') {
        hosp2 = 1.3
    } else if (hosp == '4') {
        hosp2 = 1.4
    } else if (hosp == '5') {
        hosp2 = 1.6
    }
    
    let resultado = (dias * day * hosp2)

    if (dias == '' || hosp == '') {
        document.getElementById("valorDiaria").innerHTML = 'R$0,00';
    } else {
        document.getElementById("valorDiaria").innerHTML = 'R$' + resultado;
    }
}