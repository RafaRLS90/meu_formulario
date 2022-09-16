const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});


function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === '') {
       setErrorfor(username, "O nome do usuário é obrigatório");
    }
}

function setErrorfor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small')
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;

    //Adicionar classe de sucesso
    formControl.className = 'form-control success';
}