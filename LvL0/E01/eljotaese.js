//spoiler alert: no se javascript

//Users must be able to log in with a username and password.
//If the user enters the wrong credentials three times, the system must lock them out.

var intentos = 0;
var saldo = 2000;

document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var elusuario = document.querySelector('#username').value;
    var elpwd = document.querySelector('#password').value;


    if (elusuario == 'admin' && elpwd == '12345') {
        alert('Ha ingresado');
        document.querySelector('#formulario').hidden=true;
        document.querySelector('#tablero').hidden=false;
    } else if (elusuario == 'admin'){
        intentos++;
        if (intentos == 3){
            alert('Contraseña incorrecta, el usuario ' + elusuario + ' ha sido bloqueado');
        } else if (intentos > 3){
            alert('El usuario ' + elusuario + ' se encuentrá bloqueado');
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Usuario incorrecto');
    }
});

// The initial balance in the bank account is $2000.
// The system must allow users to deposit, withdraw, view, and transfer money.

document.getElementById("saldo").innerHTML = saldo.toLocaleString(undefined,{minimumFractionDigits:2});

