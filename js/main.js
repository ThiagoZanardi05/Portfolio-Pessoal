document.addEventListener('DOMContentLoaded', () => {

    // MODIFICADO: Seleciona TODOS os elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.card, .anim-on-scroll');

    // Configurações do observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // A animação começa quando 10% do item está visível
    };

    // A função que será chamada quando um elemento entra na tela
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento depois que ele já apareceu
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria o observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Manda o observer "observar" cada um dos nossos elementos
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});