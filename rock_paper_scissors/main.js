//Opciones es igual -> piedra=0, papel=1, tijera=2
const options = [0,1,2]; 
let machineChoice;

//funcion que da la respuesta de la maquina, aleatoriamente.
function randomOption(minimo, maximo){
    let numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

//funcion que va a verificar las opciones del usuario y la maquina
function gameProcedure(userChoice){
    userChoice = parseInt(userChoice);
    machineChoice = randomOption(0,2);

    if(userChoice == 0){//el usuario eligio piedra 
        if(options[machineChoice] == 1){//si la maquina eligio papel 
            document.getElementById('effect').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(options[machineChoice] == 2){//si la maquina eligio tijera
                document.getElementById('effect').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(options[machineChoice] == 0){//si la maquina eligio piedra
                    document.getElementById('effect').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        } 
    }

    if(userChoice == 1){//el usuario eligio papel 
        if(options[machineChoice] == 2){//si la maquina eligio tijera
            document.getElementById('effect').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(options[machineChoice] == 0){//si la maquina eligio piedra
                document.getElementById('effect').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';              
            }else{
                if(options[machineChoice] == 1){//si la maquina eligio papel
                    document.getElementById('effect').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
            }
        }
    }

    if(userChoice == 2) {//el usuario eligio tijera 
        if(options[machineChoice] == 1){//si la maquina eligio papel
            document.getElementById('effect').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        }else{
            if(options[machineChoice] == 0){//si la maquina eligio piedra
                document.getElementById('effect').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(options[machineChoice] == 2) {//si la maquina eligio tijera
                    document.getElementById('effect').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
            }
        }
    }

    document.getElementById('effect').style.display = "";
}

function removeEffect() {
    document.getElementById('effect').style.display = "none";
}