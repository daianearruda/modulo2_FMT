const tituloPrincipal = document.getElementById('noticia');

(async () => {
    try {
        const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
        const data = await resposta.json();
        const noticiaPrincipal = data.items[0];

        if (noticiaPrincipal) {
            tituloPrincipal.innerHTML = noticiaPrincipal.titulo;
        }
    } catch (error) {
        console.error('Erro ao buscar as notícias:', error);
    }
})();
