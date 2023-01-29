function gerarTabuada(){
    var numero = document.getElementById('num')
    var res = document.getElementById('res')

    res.innerText = 'Aguardando'

    if(numero.value.length == 0){
        window.alert('Digite um numero válido!!!!')
    }else{
        for(let i = 1 ; i <= 10 ; i++){
            let item = document.createElement('option')
            item.text = `${numero.value} x ${i} = ${numero.value*i}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}