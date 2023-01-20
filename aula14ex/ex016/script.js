function contar() {
    var i = document.getElementById('txti')
    var f = document.getElementById('txtf')
    var p = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        alert('[ERRO] Impossivel contar!')
    } else {
    var iNum = Number(i.value)
    var fNum = Number(f.value)
    var pNum = Number(p.value)
    
    res.innerHTML = 'Contando: <br>'
    if (pNum == 0) {
        alert('Passo invalido! Considerando passo "1"...')
        pNum = 1
    }
    //Contagem crescente:
    if (iNum < fNum) {
        for (c = iNum; c <= fNum; c += pNum) {
            res.innerHTML += `${c} → `
        }
    } /*Contagem decrescente:*/ else {
        for (c = iNum; c >= fNum; c -= pNum) {
            res.innerHTML += `${c} → `
        }
    }
    res.innerHTML += `\u{1f3c1}`
    }
}
