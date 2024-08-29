
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


// area de login com modal
const modal = document.getElementById('area');

const logar = document.getElementById('button');

const cancelar = document.getElementsByClassName('botao-cancelar')[0];

logar.onclick = function() {
    modal.style.display = 'block'
};

    cancelar.onclick = function(){
        modal.style.display = 'none'
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        };
    };


    // curtidas 
    const likes = document.getElementsByClassName('icons')[0];
    let countLike = document.getElementById('count-like-image1');
    likes.addEventListener('click', function(){
        countLike.textContent = parseInt(countLike.textContent) + 1;
    });


// let divImagem = `
//    <div class="campohori">
//                 <img class="imagem-tabela"  src="${public/imagens/Everst.jpg}" alt="Everest">

//                     <div class="like">
//                         <div class="icons">
//                         <img src="icones/coração.svg" alt="like"> 
//                         <span id="count-like-image1">0</span>
//                         <img src="icones/chat-branco.svg" alt="like">
//                         <span id="count-comment-image1">0</span>
//                         </div>
//                     </div>

//     </div>
// `

const detalhes = document.getElementById('campohori');

const close = document.getElementsByClassName('close-img')[0];

const img01 = document.getElementsByClassName('imagem');

detalhes.onclick = function() {
img01.style.display = 'block'
}

    close.onclick = function(){
        img01.style.display = 'none'
    };