function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var texto = window.document.getElementById('texto')
    data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'dia.png'
        document.body.style.background = '#e2cd9f'
        texto.innerHTML = 'Bom dia!!!!'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        texto.innerHTML = 'Boa tarde!!!!'
    }else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        texto.innerHTML = 'Boa Noite!!!!'
    }
}