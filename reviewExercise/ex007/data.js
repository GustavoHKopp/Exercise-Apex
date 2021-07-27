function validaData() {
    let dataGet = document.getElementById('data').value
    let data = dataGet.split('/')
    let dia = parseInt(data[0])
    let mes = parseInt(data[1])
    let ano = parseInt(data[2])

    if(isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        alert('digite uma data com DD/MM/AAAA')
        return false
    }
    if(ano < 1903){
        alert('a pessoa mais velha do viva tem 118 anos ')
        return false
    }
    if(ano > 2021){
        alert('digite uma ano valido')
        return false;
     }
     if (mes < 1 || mes > 12) { 
        alert('digite uma mês valido')
        return false;
     }
     if (dia < 1 || dia > 31) {
        alert('digite uma dia valido')
        return false;
     }
     if ((mes==4 && mes==6 && mes==9 && mes==11) && dia==31) {
         alert('o mes que você digitou não tem 31 dias')
        return false;
     }
     if (mes == 2) { // check for february 29th
        let isleap = (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0));
        if (dia >29 || (dia ==29 && !isleap)) {
            alert('29 de fevereiro só existe em ano bissexto')
           return false;
        }
     }
     else{
         document.write(`dia  ${data[0]} '<br>' mês  
             ${data[1]} '<br>' ano  ${data[2]}`)
        return true;
     }
     return true;
 }
