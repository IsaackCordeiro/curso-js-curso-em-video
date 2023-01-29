let pessoa = {
    nome: 'José',
    sexo: 'M',
    peso: 91,
    verificaPeso(p=0){
        if(this.peso > 90){
            return 'Peso alto'
        }else{
            return 'Peso baixo'
        }
    }
}

let res = pessoa.verificaPeso(pessoa.peso)
console.log(`${pessoa.nome} pesa ${pessoa.peso}kg e está com ${res}`)