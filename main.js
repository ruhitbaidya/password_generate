// password gnerator 

let passinput = document.querySelector('#passin');
let passgenerator = document.querySelector('#passgenr');
let passcopy = document.querySelector('#passcopy');
let howpass = document.querySelector('#howpass');



passgenerator.addEventListener('click', mypass);

function mypass(){
    let passtext = 'abcdefghifklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNONQRSTUVWXYZ()_+^*&$%#@!~`/":<>';
    let passlen = howpass.value;
    passlen = parseInt(passlen);
    let password = '';
    for(let i = 1; i <= passlen; i++){
        let onpass = Math.floor(Math.random() * passtext.length);
        password += passtext.substring(onpass, onpass + 1);
    }
    passinput.value = password;
}

passcopy.addEventListener('click', passcopys);

function passcopys(){
    passinput.select();
    document.execCommand('copy');
}