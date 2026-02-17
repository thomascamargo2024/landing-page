
const elementos = document.querySelectorAll(
'.home, .texto-propaganda, .botoes, .texto-sombreado, .coluna-esquerda img, .preco, .card-bege, .imagem-coluna2, .sombra-img, .pacotes img, .informacoes-pacote, .service-repair, .texto-dianna, .imagem-dianna, .formulario, footer .ontell'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            /* HERO */
            if (
                entry.target.classList.contains('home') ||
                entry.target.classList.contains('texto-propaganda') ||
                entry.target.classList.contains('botoes')
            ) {
                entry.target.classList.add('mostrar');
            }

            /* PACOTES → imagem esquerda */
            else if (
                entry.target.classList.contains('sombra-img') ||
                (entry.target.tagName === 'IMG' && entry.target.closest('.pacotes'))
            ) {
                entry.target.classList.add('mostrar');
            }

            /* PACOTES → texto direita */
            else if (entry.target.classList.contains('informacoes-pacote')) {
                entry.target.classList.add('animar-direita');
            }

            /* PREMIUM SERVICES */
            else if (entry.target.classList.contains('service-repair')) {
                entry.target.classList.add('ativo');
            }

            /* DIANNA */
            else if (
                entry.target.classList.contains('texto-dianna') ||
                entry.target.classList.contains('imagem-dianna')
            ) {
                entry.target.classList.add('ativo');
            }

            /* SUBSCRIBE + FOOTER */
            else if (
                entry.target.classList.contains('formulario') ||
                entry.target.classList.contains('ontell')
            ) {
                entry.target.classList.add('ativo');
            }

            /* OUTROS */
            else {
                entry.target.classList.add('animar');
            }

            /* anima apenas uma vez */
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.25 });

elementos.forEach(el => observer.observe(el));
