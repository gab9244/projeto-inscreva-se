let password = document.getElementById('password')
let confirmpassword = document.getElementById('confirmpassword')
let equal = document.getElementsByClassName('equal')


function validandoSenhas () {
    if(password.value != confirmpassword.value) {
        confirmpassword.setCustomValidity(`Password Don't Match`)

       
        
       
    } else {
        confirmpassword.setCustomValidity('');
    }
}

password.onchange = validandoSenhas;
confirmpassword.onkeyup = validandoSenhas
