function somar() { 
    verificar()

    let a = parseFloat(document.getElementById('n1').value); 
    let b = parseFloat(document.getElementById('n2').value); 
    document.getElementById('resultado').textContent = a + b;
}

function subtrair()
{
    verificar()

    let a = parseFloat(document.getElementById('n1').value); 
    let b = parseFloat(document.getElementById('n2').value); 
    document.getElementById('resultado').textContent = a - b;
}

function multiplicar()
{
    verificar()

    let a = parseFloat(document.getElementById('n1').value); 
    let b = parseFloat(document.getElementById('n2').value); 
    document.getElementById('resultado').textContent = a * b;
}

function dividir()
{
    verificar()

    let a = parseFloat(document.getElementById('n1').value); 
    let b = parseFloat(document.getElementById('n2').value); 
    document.getElementById('resultado').textContent = a / b;
}

function verificar()
{
    const campo1 = document.getElementById("n1").value
    const campo2 = document.getElementById("n2").value

    if(isNaN(campo1) || campo1 === "" || isNaN(campo2) || campo2 === "" ){
        alert("Digite um valor para realizar a operação")
    }

    return
}

window.addEventListener("DOMContentLoaded", () => {
    const calculadora = document.getElementById("calculadora");
    calculadora.style.opacity = 0;

    setTimeout(() => calculadora.style.opacity = 1 , 50);  
})