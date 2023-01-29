let numeros = []
let num = document.getElementById('num')
let valoresLista = document.getElementById('valoresLista')
let res = document.getElementById('res')


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, list){
    if(list.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(num.value.length == 0 || !isNumero(num.value) || inList(num.value, numeros)){
        window.alert('Valor invalido ou já inserido')
    }else{
        numeros.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Numero ${num.value} adicionado`
        valoresLista.append(item)
        res.innerHTML = ''
    }

    num.value = ''
    num.focus()
}

function calcular(){
    if(numeros.length == 0){
        window.alert('Insira algum numero!!!')
    }else{
        let soma = 0

        for(let i = 0 ; i < numeros.length ; i++){
            soma += numeros[i];
        }

        res.innerHTML = `<br>Ao todo temos ${numeros.length} números cadastrados<br>`
        res.innerHTML += `O maior valor informado foi ${Math.max(...numeros)}<br>`
        res.innerHTML += `O menor valor informado foi ${Math.min(...numeros)}<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        res.innerHTML += `A média dos valores é ${soma/numeros.length}`
    }
}