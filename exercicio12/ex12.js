function saudacao()
{
    
     return function (nome)
    {
        return console.log('Olá, '+[nome]+"!")  
    }
    
}

saudacao()("João")


function multiplicador(x)
{
    return function()
    {
        console.log(x*5)
    }
}

multiplicador(10)()
