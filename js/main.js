document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos que queremos animar
    const cards = document.querySelectorAll('.card');

    // Configurações do observer (o que ele deve observar)
    const observerOptions = {
        root: null, // null significa o viewport do navegador
        rootMargin: '0px',
        threshold: 0.1 // A animação começa quando 10% do item está visível
    };

    // A função que será chamada quando um elemento entra na tela
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível (intersecting)
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Opcional: Para de observar o elemento depois que ele já apareceu
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria o observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Manda o observer "observar" cada um dos nossos cards
    cards.forEach(card => {
        observer.observe(card);
    });

});