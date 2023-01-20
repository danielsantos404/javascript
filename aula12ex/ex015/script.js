function verificar() {
    var data = new Date()
    var anos = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > anos) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = anos - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsexo[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}