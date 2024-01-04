//spoiler alert: no se javascript

//Users must be able to log in with a username and password.
//If the user enters the wrong credentials three times, the system must lock them out.

var intentos = 0;
var saldo = 2000;
var operacion = 'consulta';

document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var elusuario = document.querySelector('#username').value;
    var elpwd = document.querySelector('#password').value;


    if (elusuario == 'admin' && elpwd == '12345') {
        alert('Ha ingresado');
        document.querySelector('#usuario').innerHTML = elusuario;
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
document.getElementById('saldo').innerHTML = saldo.toLocaleString(undefined,{minimumFractionDigits:2});

// The system must allow users to deposit, withdraw, view, and transfer money.

document.getElementById('menu').addEventListener('change', function() {

    function muestraGrupo(){
        document.getElementById("descripcion").innerHTML = ' la cantidad de: ';
        document.querySelector('#grupo').hidden=false;
    }

    var seleccionado = this.options[this.selectedIndex].value;
    switch (seleccionado){
        case 'consultar':
            document.querySelector('#grupo').hidden=true;
            document.getElementById("mboton").innerHTML = 'Actualizar saldo';
            operacion = 'consulta';
            break;
        case 'depositar':
            document.getElementById("mboton").innerHTML = 'Depositar';
            muestraGrupo();
            operacion = 'deposito';
            break;
        case 'retirar':
            document.getElementById("mboton").innerHTML = 'Retirar';
            muestraGrupo();
            operacion = 'retiro';
            break;
        case 'transferir':
            document.getElementById("mboton").innerHTML = 'Transferir';
            muestraGrupo();
            operacion = 'transferencia';
            break;
    }
    
});

document.querySelector('#operaciones').addEventListener('submit', function(event) {
    event.preventDefault();

    function actualizaSaldo(){
        document.getElementById('saldo').innerHTML = saldo.toLocaleString(undefined,{minimumFractionDigits:2});
        document.getElementById('saldo').classList.add('efecto');
        setTimeout(function(){document.getElementById('saldo').classList.remove('efecto')}, 500);
        document.querySelector('#importe').value = null;
    }

    switch (operacion){
        case 'consulta':
            actualizaSaldo();
        break;
        case 'deposito':
            saldo = saldo + parseFloat(document.querySelector('#importe').value);
            actualizaSaldo();
        break;
        case 'retiro':
            saldo = saldo - parseFloat(document.querySelector('#importe').value);
            actualizaSaldo();
        break;
        case 'transferencia':
            saldo = saldo - parseFloat(document.querySelector('#importe').value);
            actualizaSaldo();
        break;
    }

});