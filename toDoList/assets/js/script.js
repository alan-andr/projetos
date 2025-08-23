const btnAdicionar = document.getElementById('adicionar');

btnAdicionar.addEventListener('click', () => {
    let textoTarefa = document.getElementById('tarefa').value;
    let divMensagem = document.getElementById('mensagem');
    let mensagem = document.createElement('p');

    let sectionLista = document.querySelector('section.lista');

    divMensagem.innerHTML = '';

    if (textoTarefa.trim() === '') {
        mensagem.textContent = 'Por favor, preencha o campo "Tarefa".'
        divMensagem.appendChild(mensagem);
        return;
    }

    let listaTarefa = document.getElementById('lista-tarefas');

    let headerLista = document.createElement('h2');
    headerLista.id = 'titulo-tarefas';

    if (!document.getElementById('titulo-tarefas')) {
        headerLista.textContent = 'Tarefas';
        listaTarefa.appendChild(headerLista);
        sectionLista.style.backgroundColor = '#FFFAFA';
        sectionLista.style.border = '3px solid var(--cor-06)';
        sectionLista.style.boxShadow = '1px 3px 8px -1px #d8315b40';
    }

    // Botões

    let concluir = document.createElement('input');
    concluir.type = 'button';
    concluir.value = 'Concluir';

    let remover = document.createElement('input');
    remover.type = 'button';
    remover.value = 'Remover';

    let editar = document.createElement('input');
    editar.type = 'button';
    editar.value = 'Editar';

    let divBotoes = document.createElement('div');
    divBotoes.classList.add('botoes');
    divBotoes.appendChild(concluir)
    divBotoes.appendChild(editar);
    divBotoes.appendChild(remover);

    let itemTarefa = document.createElement('li');
    let spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;
    spanTexto.classList.add('item_texto');
    itemTarefa.appendChild(spanTexto)
    itemTarefa.appendChild(divBotoes);

    let editarTexto = document.createElement('input');
    editarTexto.type = 'text'
    editarTexto.name = 'editarTexto';
    editarTexto.id = 'inputSalvar'
    
    listaTarefa.appendChild(itemTarefa);

    document.getElementById('tarefa').value = '';

    concluir.addEventListener('click', () => {
        spanTexto.classList.add('concluida')
        editar.remove()
        concluir.remove();
    })

    editar.addEventListener('click', () => {
        spanTexto.textContent = '';
        spanTexto.appendChild(editarTexto);

        editar.value = 'Salvar'

        let novaTarefa = document.getElementById('inputSalvar').value;

        editar.addEventListener('click', () => {
            spanTexto.textContent = novaTarefa;
        })
        
    })


    remover.addEventListener('click', () => {
        itemTarefa.remove()
    })
})