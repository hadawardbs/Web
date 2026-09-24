const formulario = document.getElementById('formCadastro');

formulario.reset();
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
});

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let email = document.getElementById("email").value;
    let dificuldade = verificarDificuldde();
    let jogosFavoritos = verificarJogosFavoritos();
    let personagem = document.getElementById("personagem").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "" || idade.trim() === "" || email.trim() === "" || personagem.trim() === "") {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    if (idade < 10) {
        alert("Não é permitido a participação de menores de 10 anos!")
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerText = "Cadastrado com sucesso!";
    alert("Cadastrado com sucesso!");

    alert("Nome: " + nome);
    alert("Idade: " + idade);
    alert("Data de Nascimento: " + dataNascimento);
    alert("Email: " + email);
    alert("Dificuldade: " + dificuldade);
    alert("Jogos Favoritos: " + jogosFavoritos);
    alert("Personagem: " + personagem);
    alert("Mensagem: " + mensagem);
}

function verificarDificuldde() {
    if (document.getElementById("facil").checked) return "Fácil";
    if (document.getElementById("medio").checked) return "Médio";
    if (document.getElementById("dificil").checked) return "Difícil";
    return "";
}

function verificarJogosFavoritos() {
    let jogosFavoritos = [];
    if (document.getElementById("velha").checked) jogosFavoritos.push("Velha");
    if (document.getElementById("sudoku").checked) jogosFavoritos.push("Sudoku");
    if (document.getElementById("mario").checked) jogosFavoritos.push("Mario Bros");
    return jogosFavoritos;
}