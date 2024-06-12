 function interagirUsuario(){
    const nome = prompt("Qual é o seu nome?")

    if(nome){
        alert(`Olá ${nome} !`)

        const continua = confirm(`Deseja continuar a operação?`)
        if(continua){
            interagirUsuario()
        }
     else{
        alert("Obrigado por participar")
     }
    }
 }

 document.getElementById('botao').addEventListener('click',interagirUsuario)