import { get_cookie } from "./cookie.js";

let cookie = get_cookie('Login'), h1 = document.querySelector('h1'); 
    if(cookie.indexOf(',')) cookie = cookie.split(',');

if(cookie){
    h1.innerHTML = `Приветсвую тебя <span class="name">${cookie[0]}</span>! Вот тайный материал о Вадиме Занчевском:`;
}