function saudacoes()
{
    
     return function (nome)
    {
        return console.log('Olá, '+[nome]+"!")  
    }
    
}

function executarDuasVezes(saudacoes)
{
    const cumprimento=saudacoes()
    cumprimento("João")
    cumprimento("Maria")
}

executarDuasVezes(saudacoes)





function criarSaudacao(saudacao)
{
    return function(nome)
    {
        return console.log(saudacao+nome)
    }
}

criarSaudacao("Olá, ")("Japão!")






function operacao(n1,n2) 
{
    return n1+n2
}

function calcular(n1,n2,operacao)
{
    console.log(operacao(n1,n2))
}

calcular(5,6,operacao)



function f(num)
{
    return num*3
}

function g(num)
{
   return num+5
}

function compose(f,g)
{
    return function(x)
    {
        return f(g(x))
    }
}

const compose_completo = compose(f,g)

console.log(compose_completo(8))