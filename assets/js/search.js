// Sélection de l'élément de recherche, du span affichant le nombre d'articles et de toutes les cartes d'articles
const inputSearch = document.querySelector('.search'); 
const spanArticles = document.querySelector('.nb-articles'); 
const cards = document.querySelectorAll('.articles__container');

// Initialisation du nombre d'articles total et mise à jour du span affichant ce nombre
let nbArticles = 9;
// Mise à jour du nombre d'articles affiché dans le span
spanArticles.textContent = nbArticles;

// Création de l'élément <p> pour afficher un message lorsque aucun article n'est trouvé
const noArticle = document.createElement('p'); 
noArticle.classList.add('hidden');
noArticle.textContent = 'Aucun article trouvé';
 // Ajout de l'élément <p> au conteneur des articles
articlesSectionHtml.appendChild(noArticle);

// Ajout d'un écouteur d'événements pour détecter les changements dans le champ de recherche
inputSearch.addEventListener('input', () => {
     // Initialisation du nombre d'articles trouvés
    let nbArticles = 0;
     // Valeur de recherche en minuscules pour une correspondance insensible à la casse
    const searchValue = inputSearch.value.toLowerCase(); 

    // Parcours de chaque carte d'article pour vérifier si elle correspond à la recherche
    cards.forEach(card => {
        // Valeur de recherche associée à la carte, en minuscule
        const searchString = card.getAttribute('data-search').toLowerCase();

        if(searchString.includes(searchValue)){
             // Affichage de la carte si elle correspond à la recherche
            card.classList.remove('hidden');
            // Incrémentation du nombre d'articles trouvés
            nbArticles++;
        } else {
            // Masquage de la carte si elle ne correspond pas à la recherche
            card.classList.add('hidden'); 
        }
    });

    // Gestion de l'affichage du message d'absence d'articles en fonction du nombre d'articles trouvés
    if(nbArticles === 0){
        // Affichage du message s'il n'y a aucun article trouvé
        noArticle.classList.remove('hidden');
} else {
    // Masquage du message s'il y a des articles trouvés
    noArticle.classList.add('hidden');
}
    
// Mise à jour du nombre d'articles affiché dans le span
spanArticles.textContent = nbArticles;
})
