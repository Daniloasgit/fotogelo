
// // variaveis  de login
// const login = getElementById(botaologin);
// const user = getElementById(usuario);
// const password = getElementById(senha);
// const mensage = getElementById(mensagem);

// // validar
// const confUser =  "miguelamostradin";
// const confPass = "miguelamostradin"


// // funcao do botao
// const Enter = document.getElementById('botaologin');

// // valor dos campos de login
// botaologin.addEventListener('click', function() {
// const user = user.Input.value.trim();
// const password = password.trim();


// // verificar se os dados estao corretos
// if (user === confUser  && password === confPass){
//     window.alert(`Bem vindo usuario: ${confUser} `)
// }

// else {
//     window.alert('Você não é miguelamostradin, caí fora! ');
// }


// // if (user === 0  && password === 0){
// // alert('nada foi escrevido');
// // }
// });


const modal = document.getElementById('area');

const logar = document.getElementById('button');

const cancelar = document.getElementsByClassName('botao-cancelar')[0];

logar.onclick = function() {
    modal.style.display = 'block';};

    cancelar.onclick = function(){
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

