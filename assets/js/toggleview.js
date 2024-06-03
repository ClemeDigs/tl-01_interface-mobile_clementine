document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne le bouton de basculement de vue
    const btnToggleView = document.querySelector('.btn-toggle-view');
    // Sélectionne l'élément contenant les fiches d'articles
    const articlesFichesHtml = document.querySelector('.articles__fiches');
    // Sélectionne tous les conteneurs d'articles
    const articleContainer = document.querySelectorAll('.articles__container');

    // Vérifie si tous les éléments nécessaires sont présents dans le DOM
    if (btnToggleView && articlesFichesHtml && articleContainer.length > 0) {
        
        /**
         * Bascule la vue en mode liste.
         * @function
         */
        function viewList() {
            // Change le texte du bouton pour indiquer le basculement vers la vue des articles
            btnToggleView.textContent = 'Articles';
            // Ajoute la classe 'list-fiches' à l'élément contenant les fiches d'articles
            articlesFichesHtml.classList.add('list-fiches');
            // Ajoute la classe 'list-container' à chaque conteneur d'articles
            articleContainer.forEach(article => {
                article.classList.add('list-container');
            });
        }

        /**
         * Bascule la vue en mode articles.
         * @function
         */
        function viewArticles() {
            // Change le texte du bouton pour indiquer le basculement vers la vue en liste
            btnToggleView.textContent = 'Liste';
            // Supprime la classe 'list-fiches' de l'élément contenant les fiches d'articles
            articlesFichesHtml.classList.remove('list-fiches');
            // Supprime la classe 'list-container' de chaque conteneur d'articles
            articleContainer.forEach(article => {
                article.classList.remove('list-container');
            });
        }

        // Ajoute un écouteur d'événement pour le clic sur le bouton de basculement de vue
        btnToggleView.addEventListener('click', () => {
            // Bascule entre les vues en fonction du texte actuel du bouton
            if (btnToggleView.textContent === 'Liste') {
                viewList();
            } else {
                viewArticles();
            }
        });
    }
});