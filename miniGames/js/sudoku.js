const celulasEditaveis = document.querySelectorAll(".tabuleiroSudoku td[contenteditable = true]");

for (let celula of celulasEditaveis) {
    celula.addEventListener("input", function() {
        let valor = celula.innerText;

        const regex = /^[1-9]$/;
        if (!regex.test(valor)) celula.innerText = "";
        validarCelula(celula);
    })
}

function validarCelula(celula) {
    let temErro = false;

    if (verificarLinha(celula)) temErro = true;
    if (verificarColuna(celula)) temErro = true;
    if (verificarBloco(celula)) temErro = true;

    alert("temErro");
    if (temErro) celula.style.backgroundColor = "red";
    else celula.style.backgroundColor = "ligthgreen"; //white
}

function verificarLinha(celula) {
    let linha = celula.parentElement;
    let celulasLinha = linha.querySelectorAll("td");
    let valor = celula.innerText;
    let quantidade = 0;
    for (let outraCelula of celulasLinha) {
        if (outraCelula.innerText === valor) quantidade++;
    }
    return quantidade > 1;

}

function verificarColuna(celula) {
    let coluna = celula.cellIndex;
    let linhas = document.querySelectorAll(".tabuleiroSudoku tr");
    let valor = celula.innerText;
    let quantidade = 0;
    for (let linha of linhas) {
        let celulaColuna = linha.cells(coluna);
        if (celulaColuna.innerText === valor) quantidade++;
    }
    return quantidade > 1;
}

function verificarBloco(celula) {
    let linha = celula.parentElement.rowIndex;
    let coluna = celula.cellIndex;
    let inicioLinha = Math.floor(linha / 3) * 3;
    let inicioColuna = Math.floor(coluna / 3) * 3;
    let valor = celula.innerText;
    let quantidade = 0;
    let linhas = document.querySelectorAll(".tabuleiroSudoku tr");
    for (let i = inicioLinha; i < inicioLinha + 3; i++) {
        for (let j = inicioColuna; j < inicioColuna + 3; j++) {
            if (linha[i].cells[j].innerText === valor) quantidade++;
        }
    }
    return quantidade > 1;
}

function zerarPartida() {
    const celulas = document.querySelectorAll(".tabuleiroSudoku td:not[contenteditable= true]");

    for (let celula of celulas) {
        celula.innerText = "";
    }
}