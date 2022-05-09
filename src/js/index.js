const form = document.getElementById('form')
const userName = document.getElementById('userName')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const userNameValue = userName.value
    const emailValue = email.value
    const telefoneValue = telefone.value
    const mensagemValue = mensagem.value

    if(userNameValue === '') {
        erro(userName, 'O campo é obrigatório.') 
    }else{
        sucesso(userName);
    } 
    if(emailValue === '') {
        erro(email, 'O campo é obrigatório.') 
    }else{
        sucesso(email);
    } 
    if(telefoneValue === '') {
        erro(telefone, 'O campo é obrigatório.') 
    }else{
        sucesso(telefone);
    } 
    if(mensagemValue === '') {
        erro(mensagem, 'O campo é obrigatório.') 
    }else{
        sucesso(mensagem);
    }
}

function erro(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control erro';
    
}


function sucesso(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control sucesso';
}
