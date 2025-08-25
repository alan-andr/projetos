const btnAdicionar = document.getElementById('adicionar');

const data = new Date();
let footer = document.getElementById('footer-container');
let ano = data.getFullYear();
let pFooter = document.createElement('p');
pFooter.textContent = `© ${ano} To-Do List`;
footer.appendChild(pFooter);

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
        headerLista.textContent = 'Tarefas a cumprir';
        listaTarefa.appendChild(headerLista);
        sectionLista.style.backgroundColor = '#FFFAFA';
        sectionLista.style.border = '3px solid var(--cor-06)';
        sectionLista.style.boxShadow = '1px 3px 5px 1px #d8315b1f';

    }

    // Botões

    const btnConcluir = document.createElement('input');
    btnConcluir.type = 'button';
    btnConcluir.value = 'Concluir';
    btnConcluir.id = 'concluir';

    const btnRemover = document.createElement('input');
    btnRemover.type = 'button';
    btnRemover.value = 'Remover';
    btnRemover.id = 'remover'
    

    const btnEditar = document.createElement('input');
    btnEditar.type = 'button';
    btnEditar.value = 'Editar';
    btnEditar.id = 'editar'
    

    const btnSalvar = document.createElement('input');
    btnSalvar.type = 'button';
    btnSalvar.value = 'Salvar';
    

    let divBotoes = document.createElement('div');
    divBotoes.classList.add('botoes');
    divBotoes.appendChild(btnConcluir)
    divBotoes.appendChild(btnEditar);
    divBotoes.appendChild(btnRemover);

    let itemTarefa = document.createElement('li');
    let spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;
    spanTexto.classList.add('item_texto');
    itemTarefa.appendChild(spanTexto)
    itemTarefa.appendChild(divBotoes);
    
    listaTarefa.appendChild(itemTarefa);

    document.getElementById('tarefa').value = '';

    btnConcluir.addEventListener('click', () => {
        spanTexto.classList.add('concluida')
        btnEditar.remove()
        btnConcluir.remove();
    })

    btnEditar.addEventListener('click', () => {
        const inputTexto = document.createElement('input');
        inputTexto.type = 'text';
        inputTexto.name = 'editarTexto';
        inputTexto.classList.add('novaTarefa');

        spanTexto.replaceWith(inputTexto);

        let novaTarefa = document.querySelector('input.novaTarefa');

        btnEditar.replaceWith(btnSalvar);

        btnSalvar.onclick = () => {
            spanTexto.textContent = novaTarefa.value;
            inputTexto.replaceWith(spanTexto);

            btnSalvar.replaceWith(btnEditar);
        };
    })

    btnRemover.addEventListener('click', () => {
        itemTarefa.remove()
    })
});
