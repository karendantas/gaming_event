const button = document.getElementById('button')
const form =document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const isNameValid = validateName(nameInput);
    const isLoginValid = validateLogin(loginInput);
    const isEmailValid = validateEmail(emailInput);
    const isPasswordValid = validatePassword(passwordInput);

    console.log(isEmailValid);
   if( isNameValid && isLoginValid && isEmailValid && isPasswordValid){
        forms.submit()
        alert('Formulário enviado!')
   }
})


button.addEventListener('click', 
    ()=> {
        button.style= 'transform:translateY(5px)';
    }
)
const spans = document.getElementsByClassName("error-message");

const nameInput = document.getElementById('name');
const loginInput = document.getElementById('login');
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password');
const gamesInput = document.getElementById('games');

function validateName(name){
    return (name.value.length< 3) ? setErrorSpan(0) : removeErrorSpan(0);
}
function validateLogin(login){
    return (login.value.length< 3) ? setErrorSpan(1) : removeErrorSpan(1);
}

function validateEmail(email){
    const regex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    const isTrue = regex.test(email.value)
    return isTrue ? removeErrorSpan(2) : setErrorSpan(2);
    
}
function validatePassword(password){
   return (password.value.length < 6) ? setErrorSpan(3) : removeErrorSpan(3);
}

//Span styles
function setErrorSpan(index){
    spans[index].style.display = "block";
    return false;
}
function removeErrorSpan(index){
    spans[index].style.display = "none";
    return true;
}