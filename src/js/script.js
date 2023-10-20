//SELECIONANDO A LISTA (UL) DO MEU HTML
const listaFilme = document.querySelector(".listaFilme")

// DECLARANDO FUNÇÃO LISTAR FILMES
function listarFilmes(colecaoFilmes){
    
    //1 - ACESSAR OS FILMES
    //2 - LOOP PARA ENCONTRAR OS FILMES
    //3 - MONTAR UM TEMPLATE (LI)
    //4 - MOSTRAR NA TELA

    //LIMPAR VITRINE HTML
    listaFilme.innerHTML = ""

    // filmes > ARRAY DE FILMES: ["filme 1", "filme 2", "filme 3"...]
        colecaoFilmes.forEach(function(filme){

            //PASSANDO CADA UM DOS FILMES PARA CRIAR TEMPLATE PARA CADA FILME
            const template = criarTemplate(filme)
            
            //ADICIONANDO O FILME DE FORMA VISUAL NO HTML
            listaFilme.appendChild(template)

    })
}

//CHAMANDO PARA EXECUTAR OS PASSOS
listarFilmes(filmes)

//FUNÇÃO QUE CRIA O TEMPLATE (LI)
function criarTemplate(filme){

    //1 - FILME:
        //NOME
        //IMAGEM
    //2 - CRIAR UM LI
    //3 - RETORNAR ESSE TEMPLATE COM O FILME

    // filme.nome
    // filme.url

    //CRIANDO UM TEMPLATE DO TIPO HTML
    const li = document.createElement("li")

    //ADICIONANDO UMA ESTRUTURA HTML PARA DENTRO DO (LI)
    li.innerHTML = `
        <figure>
            <img src="${filme.url}" alt="${filme.nome}" />
        </figure>
        <h2>${filme.nome}</h2>
    `

    return li
}

//FILTRAR FILME POR CATEGORIA
function filtrarFilme(filtroCategoria){
    
    //LOOP PARA FILTRAR OS FILMES
    const filmesFiltrados = filmes.filter(function(filme){
        
        //SE A CATEGORIA BUSCADA FOR === A DO FILME ATUAL, MOSTRE OU RETORNE O FILME
        if (filtroCategoria === filme.categoria) {
            //RETORNE O FILME
            return filme
        }
    })

    listarFilmes(filmesFiltrados)
}

//SELECIONANDO MENU
const secaoCategorias = document.querySelector(".secaoCategorias")
secaoCategorias.addEventListener("click", function(event){

    //CANCELAR EVENTO DO LINK => NÃO RECARREGAR A TELA
    event.preventDefault()

    //ONDE FOI CLICADO
    const categoriaSelecionada = event.target.text
    if(categoriaSelecionada == "Mostrar todos"){
        console.log("Mostre todas");
        listarFilmes(filmes)
    }else{
        console.log("Filtre por "+ categoriaSelecionada);
        filtrarFilme(categoriaSelecionada)
    }

})