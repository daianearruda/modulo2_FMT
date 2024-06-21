const adicionaTarefa =()=>{
const inputTarefa = document.getElementById('inputTarefa')
const listaTarefas = document.getElementById('listaTarefa')
const aparecerTitulo= document.getElementById('contTitulos')
    if(inputTarefa.value !== ''){
        const novatarefa = document.createElement('li')
        novatarefa.id=('tarefaAdicionada')
        novatarefa.textContent= inputTarefa.value
        listaTarefas.appendChild(novatarefa)
        inputTarefa.value=''
        if (listaTarefas.children.length > 0) {
            aparecerTitulo.style.display = 'flex'
        } else {
            aparecerTitulo.style.display = 'none'
        }

        salvarTarefa(novatarefa.textContent)
    }
}
const botaoAdicionarTarefas = document.getElementById('botaoAdicionar')
botaoAdicionarTarefas.addEventListener('click', adicionaTarefa)

const limparTarefas=()=>{
    const listaTarefas = document.getElementById('listaTarefa')
    const aparecerTitulo= document.getElementById('contTitulos')
    document.getElementById('listaTarefa').innerHTML=''

    localStorage.removeItem('tarefas')
    
    if (listaTarefas.children.length === 0) {
        aparecerTitulo.style.display = 'none'
    }
    
}

const limpaTarefa = document.getElementById('limpar')
limpaTarefa.addEventListener('click', limparTarefas)

const salvarTarefa =(tarefa)=>{
    let tarefas
    if(localStorage.getItem('tarefas') === null){
        tarefas=[]
    }else{
        tarefas=JSON.parse(localStorage.getItem('tarefas'))
    }

    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

}

document.addEventListener('DOMContentLoaded', () => {
    carregarTarefasDoLocalStorage()
})

const carregarTarefasDoLocalStorage = () => {
    let tarefas
    if (localStorage.getItem('tarefas') === null) {
        tarefas = []
    } else {
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }

    tarefas.forEach((tarefaTexto) => {
        const novaTarefa = document.createElement('li')
        novaTarefa.id=('tarefaAdicionada')
        novaTarefa.textContent = tarefaTexto
        document.getElementById('listaTarefa').appendChild(novaTarefa)
    })

    const aparecerTitulo = document.getElementById('contTitulos')
    if (tarefas.length > 0) {
        aparecerTitulo.style.display = 'flex'
    } else {
        aparecerTitulo.style.display = 'none'
    }
    
}

