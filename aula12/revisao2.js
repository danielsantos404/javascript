var agora = new Date()
var diaSem = agora.getDay()
switch (diaSem) {
    case 0:
        console.log('Hoje é domingo, meu bacano!')
        break
    case 1:
        console.log('Hoje é segunda, meu bacano!')
        break
    case 2:
        console.log('Hoje é terça, meu bacano!')
        break
    case 3:
        console.log('Hoje é quarta, meu bacano!')
        break
    case 4:
        console.log('Hoje é quinta, meu bacano!')
        break
    case 5:
        console.log('Hoje é sexta, meu bacano!')
        break
    default:
        console.log('Hoje é sábado, meu bacano!')
        break
}