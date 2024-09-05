function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada compositor na lista
    for (let dado of compositores) {
        // Cria um novo elemento HTML para cada compositor e adiciona ao resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="alcunha-meta">${dado.descrição}</p>
                <p class="descricao-meta">${dado.biografia}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Insere os resultados gerados na seção HTML
    section.innerHTML = resultados;
}

