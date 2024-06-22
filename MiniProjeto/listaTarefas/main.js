
const inputTarefa = document.getElementById('inputTarefa')
const listaTarefa = document.getElementById('listaTarefa')
const titulosLista = document.getElementById('contTitulos')


function recuperaLista() {
   
    listaTarefa.innerHTML = ''

 
    const listaStorage = localStorage.getItem('tarefas')

    if (listaStorage) {

        const tarefas = JSON.parse(listaStorage)

     
        tarefas.forEach(tarefa => {
            const novaTarefa = document.createElement('li')
            novaTarefa.textContent = tarefa
            novaTarefa.id = 'tarefaAdicionada'
            listaTarefa.appendChild(novaTarefa)
        })

        if (tarefas.length > 0) {
            titulosLista.style.display = 'flex'
        } else {
            titulosLista.style.display = 'none'
        }
    } else {
        titulosLista.style.display = 'none'
    }
}


const adicionarTarefa = () => {
   
    const novaTarefaTexto = inputTarefa.value


    if (novaTarefaTexto !== '') {
        const novaTarefa = document.createElement('li')
        novaTarefa.textContent = novaTarefaTexto
        novaTarefa.id = 'tarefaAdicionada'
        listaTarefa.appendChild(novaTarefa)


        inputTarefa.value = ''

        titulosLista.style.display = 'flex'

        let tarefas

        if (localStorage.getItem('tarefas') === null) {
            tarefas = []
        } else {
            tarefas = JSON.parse(localStorage.getItem('tarefas'))
        }

    
        tarefas.push(novaTarefaTexto);

    
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }

   
    recuperaLista()
}


const limparTarefas = () => {

    listaTarefa.innerHTML = ''

    localStorage.removeItem('tarefas')

  
    titulosLista.style.display = 'none'
}

const fetchNoticiaPrincipal = async () => {
    const tituloPrincipal = document.getElementById('noticia')
    try {
        const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        const data = await resposta.json()
        const noticiaPrincipal = data.items[0]

        if (noticiaPrincipal) {
            tituloPrincipal.textContent = noticiaPrincipal.titulo
        }
    } catch (error) {
        console.error('Erro ao buscar as notícias:', error)
    }
}


const botaoAdicionar = document.getElementById('botaoAdicionar')
botaoAdicionar.addEventListener('click', adicionarTarefa)


const limpaTarefa = document.getElementById('limpar')
limpaTarefa.addEventListener('click', limparTarefas)


document.addEventListener('DOMContentLoaded', () => {
    fetchNoticiaPrincipal()
    recuperaLista()  
})

setInterval(recuperaLista,1000)
