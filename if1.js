function soBoaNoticia(nota) {
    if (nota>=7) {
        console.log('aprovado com ' +nota)
    }
}


soBoaNoticia(8.1)
soBoaNoticia(6.1)


function seforVerdadeeufalo(valor) {
        if(valor) {
            console.log('E verdade..' +valor)
        }
}

seforVerdadeeufalo()
seforVerdadeeufalo(null)
seforVerdadeeufalo(undefined)
seforVerdadeeufalo(NaN)
seforVerdadeeufalo('')
seforVerdadeeufalo(0)
seforVerdadeeufalo(-1)
seforVerdadeeufalo(' ')
seforVerdadeeufalo('?')
seforVerdadeeufalo([])
seforVerdadeeufalo(1,2)
seforVerdadeeufalo({})




// if ( nota >= 7)  se a nota for igual o maior a 7 o bloco sera excutado