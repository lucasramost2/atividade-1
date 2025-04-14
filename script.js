function validarDados() {
    let nome = document.getElementById('nome')
    if(nome.value !="") {
        console.log(nome.value)
    } else{
        alert('por favor insira seu nome')
    }

    let sobrenome = document.getElementById('sobrenome')
    if(sobrenome.value !="") {
        console.log(sobrenome.value)
    } else{
        alert('por favor insira seu sobrenome')
    }


  
        let nascimento = document.getElementById('nascimento')
        if(nascimento.value !="") {
            console.log(nascimento.value)
        } else{
            alert('por favor insira sua data de nascimneto')
        }
    

        
            let CPF = document.getElementById('CPF')
            if(CPF.value !="") {
                console.log(CPF.value)
            } else{
                alert('por favor insira seu CPF')
            }
        

            let TELEFONE = document.getElementById('TELEFONE')
            if(TELEFONE.value !="") {
                console.log(TELEFONE.value)
            } else{
                alert('por favor insira seu TELEFONE')
            }
        

            let EMAIL = document.getElementById('EMAIL')
            if(EMAILF.value !="") {
                console.log(EMAIL.value)
            } else{
                alert('por favor insira seu EMAIL')
            }
        
}