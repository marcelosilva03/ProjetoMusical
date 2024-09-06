function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for um campo sem nada
if(!campoPesquisa) {
    section.innerHTML = "<strong>NENHUM COMPOSITOR ENCONTRADO.</strong> <strong>digite sua palavra busca/chave.</strong>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let biografia = "";
    let tags = "";

    // Itera sobre cada compositor na lista
    for (let dado of compositores) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()    
        biografia = dado.biografia.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || biografia.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um  novo resultado
            // Cria um novo elemento HTML para cada compositor e adiciona ao resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="alcunha-meta">${dado.descrição}</p>
                <p class="descricao-meta">${dado.biografia}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
               
    }

    if (!resultados) {
        resultados = "<strong>NENHUM COMPOSITOR ENCONTRADO.</strong>";
    }

    // Insere os resultados gerados na seção HTML
    section.innerHTML = resultados;
}

