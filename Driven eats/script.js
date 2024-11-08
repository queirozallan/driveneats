function selecionarItem(item) {
    // Obtém o contêiner pai da seção
    const container = item.parentNode;

    // Remove a classe "selecionado" de outros itens na mesma seção
    const itens = container.querySelectorAll('.pratos');
    itens.forEach((el) => el.classList.remove('selecionado'));

    // Adiciona a classe "selecionado" ao item clicado
    item.classList.add('selecionado');
}


function selecionarItem(item) {
    // Obtém o contêiner pai da seção
    const container = item.parentNode;

    // Remove a classe "selecionado" de outros itens na mesma seção
    const itens = container.querySelectorAll('.pratos');
    itens.forEach((el) => el.classList.remove('selecionado'));

    // Adiciona a classe "selecionado" ao item clicado
    item.classList.add('selecionado');

    // Verifica se todas as seções possuem um item selecionado
    verificarSelecao();
}

function verificarSelecao() {
    // Verifica se há um item selecionado em cada seção
    const pratoSelecionado = document.querySelector('#pratos .pratos.selecionado');
    const bebidaSelecionada = document.querySelector('#bebidas .pratos.selecionado');
    const sobremesaSelecionada = document.querySelector('#sobremesas .pratos.selecionado');

    // Obtém o botão do rodapé
    const botao = document.querySelector('.botao');

    // Habilita o botão se todas as seleções forem feitas
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        botao.classList.add('ativo');
        botao.innerHTML = "Fechar Pedido";
    } else {
        botao.classList.remove('ativo');
        botao.innerHTML = "Selecione os 3 itens<br>para fechar o pedido";
    }
}



function verificarSelecao() {
    const pratoSelecionado = document.querySelector('#pratos .pratos.selecionado');
    const bebidaSelecionada = document.querySelector('#bebidas .pratos.selecionado');
    const sobremesaSelecionada = document.querySelector('#sobremesas .pratos.selecionado');

    const botao = document.querySelector('.botao');

    // Habilita o botão se todas as seleções forem feitas
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        botao.classList.add('ativo');
        botao.innerHTML = "Fechar Pedido";
        botao.onclick = () => enviarPedido(); // Define a ação do botão
    } else {
        botao.classList.remove('ativo');
        botao.innerHTML = "Selecione os 3 itens<br>para fechar o pedido";
        botao.onclick = null; // Remove a ação do botão
    }
}

function verificarSelecao() {
    const pratoSelecionado = document.querySelector('#pratos .pratos.selecionado');
    const bebidaSelecionada = document.querySelector('#bebidas .pratos.selecionado');
    const sobremesaSelecionada = document.querySelector('#sobremesas .pratos.selecionado');

    const botao = document.querySelector('.botao');

    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        botao.classList.add('ativo');
        botao.innerHTML = "Fechar Pedido";
        botao.onclick = () => mostrarConfirmacao(); // Mostra a janela de confirmação
    } else {
        botao.classList.remove('ativo');
        botao.innerHTML = "Selecione os 3 itens<br>para fechar o pedido";
        botao.onclick = null;
    }
}

// Função para mostrar a janela de confirmação
function mostrarConfirmacao() {
    // Captura os itens selecionados
    const prato = document.querySelector('#pratos .pratos.selecionado h3').textContent;
    const bebida = document.querySelector('#bebidas .pratos.selecionado h3').textContent;
    const sobremesa = document.querySelector('#sobremesas .pratos.selecionado h3').textContent;

    // Calcula o preço total
    const precoPrato = parseFloat(document.querySelector('#pratos .pratos.selecionado h3:last-child').textContent);
    const precoBebida = parseFloat(document.querySelector('#bebidas .pratos.selecionado h3:last-child').textContent);
    const precoSobremesa = parseFloat(document.querySelector('#sobremesas .pratos.selecionado h3:last-child').textContent);
    const precoTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);

    // Preenche a modal com as informações do pedido
    const itensPedido = `
        <p>${prato}: ${precoPrato.toFixed(2)}</p>
        <p>${bebida}: ${precoBebida.toFixed(2)}</p>
        <p>${sobremesa}: ${precoSobremesa.toFixed(2)}</p>
    `;

    // Atualiza o conteúdo da modal
    document.getElementById('itens-pedido').innerHTML = itensPedido;
    document.getElementById('total-pedido').textContent = `TOTAL: R$ ${precoTotal}`;

    // Exibe a modal
    document.getElementById('confirmacao').style.display = 'flex';

    // Gera a URL para o WhatsApp com a mensagem do pedido
    const mensagemWhatsapp = `Olá,%20gostaria%20de%20fazer%20o%20pedido%3A%0A- %20Prato%3A%20${encodeURIComponent(prato)}%0A- %20Bebida%3A%20${encodeURIComponent(bebida)}%0A- %20Sobremesa%3A%20${encodeURIComponent(sobremesa)}%0ATotal%3A%20R%24%20${precoTotal}`;

    // Atualiza o link de confirmação do pedido
    document.getElementById('confirmar-pedido').href = `https://wa.me/5521989896484?text=${mensagemWhatsapp}`;

    // Adiciona evento de fechamento
    document.getElementById('cancelar-pedido').onclick = () => fecharModal();
}

// Função para fechar a modal
function fecharModal() {
    document.getElementById('confirmacao').style.display = 'none';
}

