let jogador1 = "";
let jogador2 = "";

let jogadorAtual = "";

let jogoAtivo = false;

const combinacoesVitoria = [
    //Linhas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //Colunas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //Diagonais
    [0, 4, 8],
    [2, 4, 6]
]

function escolherJogador1(emoji) {
    jogador1 = emoji;

    document.getElementById("jogador1-escolhido").innerText = "Jogador 1: " + jogador1;
}

function escolherJogador2(emoji) {
    jogador2 = emoji;

    document.getElementById("jogador2-escolhido").innerText = "Jogador 2: " + jogador2;
}

function iniciarJogo() {
    if (jogador1 === "" || jogador2 === "") {
        alert("Os dois jogadores precisam escolher um emoji.");
        return;
    }
    jogadorAtual = jogador1;
    jogoAtivo = true;
    document.getElementById("jogador-atual").innerText = "Vez de: " + jogadorAtual;

    limparTabuleiro();
}

function jogar(celula) {
    if (!jogoAtivo) return;
    
    if (celula.innerText !== "") return;

    celula.innerText = jogadorAtual;
    celula.style.backgroundColor = jogadorAtual == jogador1 ? "#f2f7ad" : "#e0adf7";
    
    if (verificarVencedor()) {
        document.getElementById("jogador-atual").innerText = "🏆 O vencedor é " + jogadorAtual;
        jogoAtivo = false;
        return;
    }

    if (verificarEmpate()) {
        document.getElementById("jogador-atual").innerText = "👵 Deu Velha!";
        jogoAtivo = false;
        return;
    }

    trocarJogador();
}

function trocarJogador() {
    if (jogadorAtual === jogador1) jogadorAtual = jogador2;
    else jogadorAtual = jogador1;

    //jogadorAtual = jogadorAtual === jogador1 ? jogador2 : jogador1;
    document.getElementById("jogador-atual").innerText = "Vez de: " + jogadorAtual;
}

function verificarVencedor() {
    //Pega todas as celulas (td) da classe tabuleiroVelha (table)
    const celulas = document.querySelectorAll(".tabuleiroVelha td");

    //Verificar combinações
    for (let combinacao of combinacoesVitoria) {
        //Pega as 3 celular de uma combinação
        const primeira = celulas[combinacao[0]].innerText;
        const segunda = celulas[combinacao[1]].innerText;
        const terceira = celulas[combinacao[2]].innerText;

        if (primeira === "") continue;

        //3 celulas iguais
        if (primeira === segunda && segunda === terceira) {
            celulas[combinacao[0]].style.backgroundColor = "lightgreen";
            celulas[combinacao[1]].style.backgroundColor = "lightgreen";
            celulas[combinacao[2]].style.backgroundColor = "lightgreen";
            return true;
        }
    }
    return false;
}

function verificarEmpate() {
    const celulas = document.querySelectorAll(".tabuleiroVelha td")
    for (let celula of celulas) {
        if (celula.innerText === "") return false;
    }
    return true;
}

function limparTabuleiro() {
    const celulas = document.querySelectorAll(".tabuleiroVelha td");
    for (let celula of celulas) {
        celula.innerText = "";
        celula.style.backgroundColor = "white";
    }
}
