function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");
  
    // Obtém o valor do campo de pesquisa e converte para minúsculas para facilitar a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Se estiver vazio, exibe uma mensagem de "Nada foi encontrado"
      section.innerHTML = "<p>Nada foi encontrado!</p>";
      return;
    }
  
    // Inicializa a variável para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item de dados
    for (dado of dados) {
      // Converte todas as propriedades do dado para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let link = dado.link.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa é encontrado no título, descrição ou link
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || link.includes(campoPesquisa)) {
        // Se encontrar, adiciona um novo elemento HTML com os detalhes do dado aos resultados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">
              ${dado.descricao}</p>
            <p>Conheça nossa página no instagram clicando<a href=${dado.link} target="_blank">"aqui"</a>!</p>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem de "Nada foi encontrado"
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados da pesquisa
    section.innerHTML = resultados;
  }