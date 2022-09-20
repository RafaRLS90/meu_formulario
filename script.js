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
    } else{
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorfor(email, 'O email é obrigatório')
    } else if (checkEmail(emailValue)) {
            setErrorfor(email, 'Por favor, insira um email válido.');
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorfor(password, "A senha é obrigatória. ");
    } else if (passwordValue.lenght < 7) {
        setErrorfor(passwor, "A senha precisa ter 7 caracteres...")
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
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}