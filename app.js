let listaNomes = []


function adicionarJogador() {
    let nomeJogador = document.querySelector("input").value; // Armazenando o valor(nome do jogador) passado pelo input;

    if (nomeJogador.trim() != "") { // Impede que o usuário passe o nome vazio ou apenas com espaços;
        listaNomes.push(nomeJogador);  // Adiciona o nome ao array;
        nomeNaLista(); // Função que atualiza a lista no DOM <li>;
        limparNome(); // Limpa o campo de entrada do nome;
    } else {
        alert("Por favor, insira um nome");
    }
}
// PERMITIR COM O ENTER ENVIAR O NOME DO JOGADOR
document.getElementById("jogador").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        adicionarJogador();
    }
});

function nomeNaLista() {
    let ul = document.getElementById("listaNomes"); // Armazena o elemento ul listaNomes na variavel ul pra melhorar a manipulação;
    ul.innerHTML = ""; // Garante que a lista seja limpa pra evitar duplicação do for;

    for (let i = 0; i < listaNomes.length; i++) {
        let naLista = document.createElement("li"); // Criando um elemento de lista;
        naLista.textContent = listaNomes[i]; // Passando o nome na lista a cada iteração;
        ul.appendChild(naLista); // Adiciona o elemento <li> como filho do <ul>;
    }
}

function limparNome() {
    let nomeJogador = document.querySelector("input"); // Armazenando o input na varialvel nomeJogador pra melhorar a manipulação;
    nomeJogador.value = ""; // Limpa o campo quando o usuário digita um nome para melhorar sua exp;
}

function limparLista() {
    let timeAzul = document.getElementById("timeAzul").innerHTML;
    let timeVermelho = document.getElementById("timeVermelho").innerHTML;

    if (listaNomes.length === 0 && timeAzul === "" && timeVermelho === "") {
        alert("A lista já está vazia! ");
    } else {
        listaNomes = [];
        listaOriginal = [];
        document.getElementById("listaNomes").innerHTML = "";
        document.getElementById("timeAzul").innerHTML = "";
        document.getElementById("timeVermelho").innerHTML = "";
    }
}

function sortearTime() {
    if (listaNomes.length < 2) {
        alert("Adicione pelo menos 2 jogadores! ");
    } else {
        let ulAzul = document.getElementById("timeAzul"); // Acessando o elmento pelo id;
        ulAzul.innerHTML = "";

        let ulLaranja = document.getElementById("timeVermelho"); // Acessando o elmento pelo id;
        ulLaranja.innerHTML = ""; //'<li style="color: black; font-weight: bold;">TIME LARANJA</li>' opçao para alterar ai mesmo

        // Adiciona o título ao time azul (dentro de um <li>)
        let tituloAzul = document.createElement("li");
        tituloAzul.textContent = "TIME AZUL";
        tituloAzul.classList.add("titulo-time"); // classe para estilizar separado
        ulAzul.appendChild(tituloAzul);

        // Adiciona o título ao time laranja (dentro de um <li>)
        let tituloLaranja = document.createElement("li");
        tituloLaranja.textContent = "TIME LARANJA";
        tituloLaranja.classList.add("titulo-time");
        ulLaranja.appendChild(tituloLaranja);

        let listaOriginal = [...listaNomes];
        let totalJogadores = listaOriginal.length;

        for (let i = 0; i < totalJogadores / 2; i++) {

            let sorteioAzul = Math.floor(Math.random() * listaOriginal.length);
            let jogadorAzul = listaOriginal[sorteioAzul];
            listaOriginal.splice(sorteioAzul, 1);

            let liAzul = document.createElement("li");
            liAzul.textContent = jogadorAzul;
            ulAzul.appendChild(liAzul);

            // Sorteia pro time laranja (verifica se ainda tem jogador, se for ímpar)
            if (listaOriginal.length > 0) {
                let sorteioLaranja = Math.floor(Math.random() * listaOriginal.length);
                let jogadorLaranja = listaOriginal[sorteioLaranja];
                listaOriginal.splice(sorteioLaranja, 1);

                let liLaranja = document.createElement("li");
                liLaranja.textContent = jogadorLaranja;
                ulLaranja.appendChild(liLaranja);
            }
        }
        let limpandoLista = document.getElementById("listaNomes"); // Acessando o elmento pelo id;
        limpandoLista.innerHTML = "";
    }
}