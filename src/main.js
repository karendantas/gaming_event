const button = document.getElementById('button')
const form =document.getElementById('form');
const storageKey = "userdata"

const modal = document.getElementById('modal');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const isNameValid = validateName(nameInput);
    const isLoginValid = validateLogin(loginInput);
    const isEmailValid = validateEmail(emailInput);
    const isPasswordValid = validatePassword(passwordInput);

    console.log(isEmailValid);
   if( isNameValid && isLoginValid && isEmailValid && isPasswordValid){
        const data = {
            name: nameInput.value,
            game: gamesInput.value
        }
        localStorage.setItem(storageKey, JSON.stringify(data));
        showModal();
       
   }
})

function showModal(){
    const data = JSON.parse( localStorage.getItem(storageKey));
    const {name, game} = data;

    const span = document.querySelector('#modal span')
    span.innerHTML  = `Parabéns, ${name}`
    const p = document.querySelector('#modal p')
    p.innerHTML = `Você agora será selecionado para um time de ${game}`;
    
    const modalButton = document.querySelector('#modal button')
    modalButton.addEventListener('click', () => { form.submit() })
    modal.classList.remove("hidden");
    modal.classList.add("show");
}

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