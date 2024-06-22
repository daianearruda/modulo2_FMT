document.addEventListener('DOMContentLoaded', () => {
    fetchNoticiaPrincipal();
    carregarTarefasDoLocalStorage();
});

const fetchNoticiaPrincipal = async () => {
    const tituloPrincipal = document.getElementById('noticia');
    try {
        const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
        const data = await resposta.json();
        const noticiaPrincipal = data.items[0];

        if (noticiaPrincipal) {
            tituloPrincipal.textContent = noticiaPrincipal.titulo;
        }
    } catch (error) {
        console.error('Erro ao buscar as notícias:', error);
    }
};

const adicionaTarefa = () => {
    const inputTarefa = document.getElementById('inputTarefa');
    const listaTarefas = document.getElementById('listaTarefa');
    const aparecerTitulo = document.getElementById('contTitulos');

    if (inputTarefa.value !== '') {
        const novatarefa = document.createElement('li');
        novatarefa.id = 'tarefaAdicionada';
        novatarefa.textContent = inputTarefa.value;
        listaTarefas.appendChild(novatarefa);
        inputTarefa.value = '';


        if (listaTarefas.children.length > 0) {
            aparecerTitulo.style.display = 'flex';
        } else {
            aparecerTitulo.style.display = 'none';
        }

        salvarTarefa(novatarefa.textContent);
    }
};

const botaoAdicionarTarefas = document.getElementById('botaoAdicionar');
botaoAdicionarTarefas.addEventListener('click', adicionaTarefa);

const limparTarefas = () => {
    const listaTarefas = document.getElementById('listaTarefa');
    const aparecerTitulo = document.getElementById('contTitulos');
    listaTarefas.innerHTML = '';
    localStorage.removeItem('meus-interesses');

    if (listaTarefas.children.length === 0) {
        aparecerTitulo.style.display = 'none';
    }
};

const limpaTarefa = document.getElementById('limpar');
limpaTarefa.addEventListener('click', limparTarefas);

const salvarTarefa = (tarefa) => {
    let tarefas;
    if (localStorage.getItem('meus-interesses') === null) {
        tarefas = [];
    } else {
        tarefas = JSON.parse(localStorage.getItem('meus-interesses'));
    }

    tarefas.push(tarefa);
    localStorage.setItem('meus-interesses', JSON.stringify(tarefas));
};

const carregarTarefasDoLocalStorage = () => {
    const listaTarefas = document.getElementById('listaTarefa');
    const aparecerTitulo = document.getElementById('contTitulos');

    let tarefas;
    if (localStorage.getItem('meus-interesses') === null) {
        tarefas = [];
    } else {
        tarefas = JSON.parse(localStorage.getItem('meus-interesses'));
    }

    listaTarefas.innerHTML = '';

    tarefas.forEach((tarefaTexto) => {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefaTexto;
        novaTarefa.id = 'tarefaAdicionada';
        listaTarefas.appendChild(novaTarefa);
    });

    if (tarefas.length > 0) {
        aparecerTitulo.style.display = 'flex';
    } else {
        aparecerTitulo.style.display = 'none';
    }
};

setInterval(carregarTarefasDoLocalStorage, 1000)

