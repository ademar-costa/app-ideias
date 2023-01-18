function converte(binary,num){
    let valor = document.getElementById('txtb')
    let res = document.getElementById('res')
    binary = Number(valor.value)
    num = Number(valor.value.length)


    if(num < 8 && binary.toString(2)){ 
        res.innerHTML = `<h1> Binario = ${binary}<br> quantidade de digito ${num}`
        
    }else{
        alert('digite apenas 8 digitos')
    }
}