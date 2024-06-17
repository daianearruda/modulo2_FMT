

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
linkSocial.forEach(link => {
    link.addEventListener('click', eventoClick)
})

const episodios = [
    {
        id: 1,
        episodio: 'T1:01',
        tempo: '24min',
        imagem: './imgs/ep1.png'
    },
    {
        id: 2,
        episodio: 'T1:02',
        tempo: '24min',
        imagem: './imgs/ep2.png'
    },
    {
        id: 3,
        episodio: 'T1:03',
        tempo: '24min',
        imagem: './imgs/ep3.png'
    },
    {
        id: 4,
        episodio: 'T1:04',
        tempo: '24min',
        imagem: './imgs/ep4.png'
    },
    {
        id: 5,
        episodio: 'T1:05',
        tempo: '24min',
        imagem: './imgs/ep5.png'
    }
]


const listaEp = document.getElementById('listaEpisodios')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const numVisivelImagens = 3
let startIndex = 0

function showVisibleImages() {
    listaEp.innerHTML = ''

    for (let i = startIndex; i < startIndex + numVisivelImagens; i++) {
        if (i >= episodios.length) break
        const ep = episodios[i]
        const cardEpisodio = document.createElement('div');
        cardEpisodio.className = 'cardEpisodio'
        cardEpisodio.style.cursor = 'pointer'
        cardEpisodio.innerHTML = `
        <span>${ep.episodio}</span>
        <span>${ep.tempo}</span>
        <img src='${ep.imagem}' alt="Episódio ${ep.id}">
      `
        cardEpisodio.addEventListener('click', () => {
            console.log(`Você clicou no episódio ${ep.episodio}`)
        })
        listaEp.appendChild(cardEpisodio)

               
        if (i === startIndex + 2) {
             cardEpisodio.id = 'terceira-imagem'
        }
    }
}

showVisibleImages();

nextBtn.addEventListener('click', () => {
    if (startIndex + numVisivelImagens < episodios.length) {
        startIndex++;
        showVisibleImages();
    }
})

prevBtn.addEventListener('click', () => {
    if (startIndex > 0) {
        startIndex--;
        showVisibleImages();
    }
})

