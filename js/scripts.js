const botaoTema = document.getElementById('botao-tema');

function aplicarTema(tema) {
    document.body.classList.toggle('tema-escuro', tema === 'escuro');
    botaoTema.textContent = tema === 'escuro' ? 'Tema claro' : 'Tema escuro';
    botaoTema.setAttribute('aria-pressed', String(tema === 'escuro'));
}

aplicarTema(localStorage.getItem('tema') || 'claro');

botaoTema.addEventListener('click', function () {
    const tema = document.body.classList.contains('tema-escuro') ? 'claro' : 'escuro';
    localStorage.setItem('tema', tema);
    console.log('Tema escolhido: ' + tema);
    aplicarTema(tema);
});

const formulario = document.querySelector('#formulario-contato');

if (formulario) {
    const resposta = document.getElementById('resposta-formulario');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            resposta.textContent = 'Confira os campos obrigatórios e tente novamente.';
            resposta.className = 'mensagem-formulario erro';
            formulario.reportValidity();
            return;
        }

        resposta.textContent = 'Formulário preenchido corretamente! Esta é uma demonstração; os dados não são enviados.';
        resposta.className = 'mensagem-formulario sucesso';
    });

    formulario.addEventListener('reset', function () {
        resposta.textContent = '';
        resposta.className = 'mensagem-formulario';
    });
}
