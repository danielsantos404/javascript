function calcular() {
    var nTxt = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (nTxt.value.length == 0 ) {
        alert('Por favor, digite um número!')
    } else {
    nNum = Number(nTxt.value)
    tab.innerHTML = ''

    for (c = 1; c <= 10; c++) {
        var item = document.createElement('option')
        item.text = `${nNum} x ${c} = ${nNum*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        }
    }
}