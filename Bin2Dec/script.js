function converte(num,quant){
    let valor = document.getElementById('txtb')
    let res = document.getElementById('res')
    num = Number(valor.value)
    quant = Number(valor.value.length)

    let regex = /^[0-1]{8}$/
    let testeLogico = regex.test(num)
    

    if(quant <= 8 && testeLogico == true){
        let decimal = parseInt(num, 2)
        res.innerHTML = `<h1> O resultado é ${decimal}</h1>`
    }else{
        alert('Digite apenas número binários de até 8 digitos!')
    }
   
    
 
}