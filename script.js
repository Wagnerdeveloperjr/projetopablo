// Aguarda o documento HTML ser totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o formulário pelo ID
    const formCotacao = document.getElementById('cotacaoForm');

    // Verifica se o formulário existe na página para evitar erros
    if (formCotacao) {
        formCotacao.addEventListener('submit', function(evento) {
            // 1. Previne o comportamento padrão (recarregar a página)
            evento.preventDefault();
            
            // 2. Captura os valores digitados nos campos
            const nome = document.getElementById('nome').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const email = document.getElementById('email').value;
            const veiculo = document.getElementById('veiculo').value;

            // 3. Monta a mensagem que chegará no WhatsApp do corretor
            let mensagem = `Olá! Meu nome é ${nome}. Gostaria de solicitar uma cotação de seguro auto.\n\n`;
            mensagem += `*Meus dados:*\n`;
            mensagem += `- WhatsApp: ${whatsapp}\n`;
            
            // Adiciona e-mail e veículo se preenchidos
            if (email !== '') {
                mensagem += `- E-mail: ${email}\n`;
            }
            if (veiculo !== '') {
                mensagem += `- Veículo: ${veiculo}`;
            }

            // 4. Codifica a mensagem para formato de link (URL)
            const mensagemCodificada = encodeURIComponent(mensagem);

            // 5. Número de WhatsApp do Corretor
            const numeroCorretor = '5527992273040'; 

            // 6. Cria o link oficial da API do WhatsApp
            const linkWhatsapp = `https://wa.me/${numeroCorretor}?text=${mensagemCodificada}`;

            // 7. Redireciona a página para o WhatsApp
            window.location.href = linkWhatsapp;

            // 8. Limpa os campos do formulário
            formCotacao.reset();
        });
    }
});