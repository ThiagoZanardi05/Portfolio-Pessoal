document.addEventListener('DOMContentLoaded', () => {
    // Pega todos os elementos que abrem o modal
    const projectItems = document.querySelectorAll('.project-item');
    // Pega o modal e o botão de fechar
    const modal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');

    // Elementos do conteúdo do modal que serão preenchidos
    const modalImage = document.getElementById('modalProjectImage');
    const modalSubtitle = document.getElementById('modalProjectSubtitle');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalDescription = document.getElementById('modalProjectDescription');
    const modalTech = document.getElementById('modalProjectTech');
    const modalLinks = document.getElementById('modalProjectLinks');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            // Pega as informações dos atributos data-* do item clicado
            const image = item.dataset.image;
            const subtitle = item.dataset.subtitle;
            const title = item.dataset.title;
            const description = item.dataset.description;
            const tech = item.dataset.tech.split(','); // Transforma string em array
            const liveLink = item.dataset.liveLink;
            const githubLink = item.dataset.githubLink;

            // Preenche o conteúdo do modal
            modalImage.src = image;
            modalSubtitle.textContent = subtitle;
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            // Limpa e preenche as tecnologias
            modalTech.innerHTML = '';
            tech.forEach(t => {
                const techSpan = document.createElement('span');
                techSpan.textContent = t;
                modalTech.appendChild(techSpan);
            });

            // Limpa e preenche os links
            modalLinks.innerHTML = '';
            if (liveLink && liveLink !== '#') {
                const liveAnchor = document.createElement('a');
                liveAnchor.href = liveLink;
                liveAnchor.target = '_blank';
                liveAnchor.className = 'btn-primary';
                liveAnchor.innerHTML = 'Ver Projeto Online <i class="ph ph-arrow-up-right"></i>';
                modalLinks.appendChild(liveAnchor);
            }
            if (githubLink && githubLink !== '#') {
                const githubAnchor = document.createElement('a');
                githubAnchor.href = githubLink;
                githubAnchor.target = '_blank';
                githubAnchor.className = 'btn-secondary';
                githubAnchor.innerHTML = 'Ver no GitHub <i class="ph ph-github-logo"></i>';
                modalLinks.appendChild(githubAnchor);
            }

            // Mostra o modal
            modal.style.display = 'block';
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Eventos para fechar o modal
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});