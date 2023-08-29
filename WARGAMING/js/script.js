const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})

document.querySelector('.button').onclick = function(){

    var password = document.querySelector('.password').value,
        password2 = document.querySelector('.password2').value;

        if(password == ""){
            alert("Debe ingresar una contraseña")
        }
        else if (password != password2){
            alert("Las contraseñas no coinciden")
        }
        else if (password == password2){
            return true
        }
        
}
