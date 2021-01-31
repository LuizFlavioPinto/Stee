// Redirecionamento de formulário

let formularios = []
let confirmacao = [false,false]

for(let i = 1; i < 3; i++){
    formularios[i] = document.getElementById(`form${i}`)
}

function redirecionar () {
    for(let i = 1; i < 3; i++){
        if(formularios[i].value.length < 1){
            alert(`Por favor, preencha o campo ${formularios[i].name}`);
        }else{
            confirmacao[i-1] = true
        }
    }

    if(confirmacao[0] == true && confirmacao[1] === true){
        window.location.assign("confirmacao.html")
    }    
}