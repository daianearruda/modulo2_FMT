const inputTarefa = document.getElementById('inputTarefa')
const listaTarefa = document.getElementById('listaTarefa')
const titulosLista = document.getElementById('contTitulos')

function recuperaLista() {
    const listaStorage = localStorage.getItem('tarefas')

    if (listaStorage) {
        const tarefas = JSON.parse(listaStorage)

        listaTarefa.innerHTML = ''

        tarefas.forEach(tarefa => {
            const novaTarefa = document.createElement('li')
            novaTarefa.textContent = tarefa.texto
            novaTarefa.id = 'tarefaAdicionada'

            if (tarefa.riscada) {
                novaTarefa.classList.add('tarefa-riscada')
            }

            novaTarefa.addEventListener('click', () => {
                novaTarefa.classList.toggle('tarefa-riscada')
                atualizaLocalStorage() 
            });

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
    const novaTarefaTexto = inputTarefa.value.trim()

    if (novaTarefaTexto !== '') {
        const novaTarefa = document.createElement('li')
        novaTarefa.textContent = novaTarefaTexto
        novaTarefa.id = 'tarefaAdicionada'

        novaTarefa.addEventListener('click', () => {
            novaTarefa.classList.toggle('tarefa-riscada')
            atualizaLocalStorage()
        });

        listaTarefa.appendChild(novaTarefa)
        inputTarefa.value = ''

        let tarefas

        if (localStorage.getItem('tarefas') === null) {
            tarefas = []
        } else {
            tarefas = JSON.parse(localStorage.getItem('tarefas'))
        }

        tarefas.push({ texto: novaTarefaTexto, riscada: false })
        localStorage.setItem('tarefas', JSON.stringify(tarefas))

        titulosLista.style.display = 'flex'
    }

    recuperaLista()
}

const limparTarefas = () => {
    listaTarefa.innerHTML = ''
    localStorage.removeItem('tarefas')
    titulosLista.style.display = 'none'
}

const atualizaLocalStorage = () => {
    const tarefas = Array.from(listaTarefa.querySelectorAll('li')).map(li => {
        return {
            texto: li.textContent,
            riscada: li.classList.contains('tarefa-riscada')
        }
    })
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const fetchNoticiaPrincipal = async () => {
    const tituloPrincipal = document.getElementById('noticia')
    try {
        const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
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
});

setInterval(recuperaLista, 1000)
