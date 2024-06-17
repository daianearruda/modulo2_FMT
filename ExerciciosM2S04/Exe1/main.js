

const paginaEmConstrucao = () => {
    alert('Página em construção')
}

const links = document.querySelectorAll('.links')

links.forEach(link => {
    link.addEventListener('click', paginaEmConstrucao)
})

const eventoClick = () => {
    console.log("voce clicou aqui")
}

const linkSocial = document.querySelectorAll('.social')
linkSocial.forEach(link =>{
    link.addEventListener('click', eventoClick)
})

const episodios = [
    {
        id:1,
        episodio:'T1:01',
        tempo:'24min',
        imagem: './imgs/ep1.png'
    },
    {
        id:2,
        episodio:'T1:02',
        tempo:'24min',
        imagem: './imgs/ep2.png'
    },
    {
        id:3,
        episodio:'T1:03',
        tempo:'24min',
        imagem: './imgs/ep3.png'
    }
]

const listaEp = document.getElementById('listaEpisodios')
episodios.forEach(ep =>{
    const cardEpisodio = document.createElement('div')
    cardEpisodio.className='cardEpisodio'
    cardEpisodio.style.cursor='pointer'
    cardEpisodio.innerHTML=`<span> ${ep.episodio}</span>
                            <span> ${ep.tempo}</span>
                            <img src='${ep.imagem}' alt="Episódio ${ep.id}">
    `
    cardEpisodio.addEventListener('click', () => {
        console.log(`Você clicou no episódio ${ep.episodio}`);
        
    })

    listaEp.appendChild(cardEpisodio)
})


