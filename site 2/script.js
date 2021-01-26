function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro]Verifique os dados novamente!!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero  = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemenino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemenina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultomulher.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)  
    }

}