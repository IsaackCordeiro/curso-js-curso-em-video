function contar(){
    var comandos = document.getElementsByName('comandos')
    var contador = document.getElementById('contador')
    var ini = Number(comandos[0].value)
    var fim = Number(comandos[1].value)
    var pass = Number(comandos[2].value)

    if(comandos[0].value.length == 0 || comandos[1].value.length == 0 || comandos[2].value.length == 0){
        window.alert('Impossível contar')
    } else if(pass == 0){
        window.alert('Passo invalido')
    }else{
        contador.innerHTML = 'Contando... <br>'
        if(ini < fim){
            // Contagem crescente
            for(i = ini ; i <= fim ; i += pass){
                contador.innerHTML += `${i} `
            }
        }else{
            // Contagem descrescente
            for(i = ini ; i >= fim ; i -= pass){
                contador.innerHTML += `${i} `
            }
        }
    }

    
}