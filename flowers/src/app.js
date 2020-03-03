const $ = el => document.querySelector(el);
$('header').innerText = "hugo";

$('nav').onclick = _ => console.log('clicked');