import { set_cookie, get_cookie } from "./cookie.js";

let i;

function manager(password, cookie, inputs, href, event){
    event.preventDefault();

    let count = 0;
    const inputs_value = []; inputs.forEach(el => {inputs_value.push(el.value)});
    if(!cookie){
        for(i=0;i<inputs_value.length;i++) if(inputs[i].value) count++;
        if(count==2){set_cookie('Login', inputs_value);} else{return;}
    }

    if(cookie)(password.value==cookie[1])? window.location.href = href: alert('Неверный пароль!');
    else window.location.href = href;
}

const form = document.querySelector('form'), inputs_worker = form.querySelectorAll('.input_worker'), h1 = form.querySelector('h1');
const [login, password] = inputs_worker; 

let cookie = get_cookie('Login');
if(cookie){
    if(cookie.indexOf(',')) cookie = cookie.split(',');
    console.log(cookie[1])
    h1.innerHTML = `Приветсвую тебя ${cookie[0]}, пожалуйста введи пароль :)`;
    login.remove();
}

form.addEventListener('submit', (event)=>{manager(password, cookie, inputs_worker, 'finish.html', event)});