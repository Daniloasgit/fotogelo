
const button = document.querySelector("#botao");
const modal = document.querySelector("#modal");
const botaosair = document.querySelector("#botaosair");

button.onclick =function () {
    modal.Show();
};

botaosair.addEventListener('click', () => {
    modal.close();
});


// variaveis  de login
const login = getElementById(botaologin);
const user = getElementById(usuario);
const password = getElementById(senha);
const mensage = getElementById(mensagem);

// validar
const confUser =  "miguelamostradin";
const confPass = "miguelamostradin"


// funcao do botao
const Enter = document.getElementById('botaologin');

// valor dos campos de login
botaologin.addEventListener('click', function() {
const user = user.Input.value.trim();
const password = password.trim();


// verificar se os dados estao corretos
if (user === confUser  && password === confPass){
    alert(`Bem vindo usuario: ${confUser} `)
}

else {
    alert('Você não é miguelamostradin, caí fora! ');
}
});


