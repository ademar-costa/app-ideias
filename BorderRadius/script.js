function modificar(){
    let sE = document.getElementById('supEsq').value
    let sD = document.getElementById('supDir').value
    let iE = document.getElementById('infEsq').value
    let iD = document.getElementById('infDir').value
    let regex = /^[0-9]{0,2}(px)$/

    if(regex.test(sE, sD, iE, iD)){
        document.getElementById('res').style.borderTopLeftRadius = sE
        document.getElementById('res').style.borderTopRightRadius = sD
        document.getElementById('res').style.borderBottomLeftRadius = iE
        document.getElementById('res').style.borderBottomRightRadius = iD
    }else{
        alert('[ERRO] inválido! Por favor, digite um valor válido, como "10px"')
    }
}