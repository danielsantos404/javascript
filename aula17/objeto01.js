let pessoa = {
    nome: 'Daniel',
    sexo: 'M',
    idade: 20,
    peso: 65.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}


pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)
