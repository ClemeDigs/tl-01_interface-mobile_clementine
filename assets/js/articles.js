class Article{
    /**
     * @param {string} name
     * @param {string} img
     * @param {string} desc
     * @param {string} id
     * @param {string} img2
     * @param {string} title2
     * @param {string} author
     * @param {string} readTime
     * @param {string} date 
     * @param {string} para
     */
    constructor(img, title, desc, id, img2, title2, author, readTime, date, para){
        this.img = img;
        this.title = title;
        this.desc = desc;
        this.id = id;
        this.img2 = img2;
        this.title2 = title2;
        this.author = author;
        this.readTime = readTime;
        this.date = date;
        this.para = para;
    }
}

// Liste des articles
const articles = [
    new Article (
        './assets/img/articles/pepins.png',
        'Mes pépins',
        'Les problèmes que j\'ai rencontrés en réalisant ce travail',
        'pepins',
        './assets/img/articles/pepins.png',
        'Mes pépins',
        'Clémentine',
        '3 minutes',
        '6 Juin 2024',
        'Les problèmes que j’ai rencontré pendant ce travail sont pour la plupart de petites erreurs d’inattention. Le premier problème a eu lieu quand j’ai voulu ajouter le dialog pour les articles. J’ai voulu me servir du code du fichier JavaScript dialog.js pour pouvoir ouvrir et fermer la modale avec le même fonctionnement, mais le lien ne se faisait pas, alors que les data-dialog et les id correspondaient bien. Après deux heures de recherche, j’ai fini par réaliser que mes fichier JS étaient liés dans le mauvais ordre; le fichier dialog.js était lu avant le fichier articles.js, donc les articles étaient inexistants au moment de la recherche. Mon deuxième problème a été au moment d’afficher le contenu de la modale de mes articles. J’aurais aimé pouvoir utiliser le même titre et la même image, mais si j’ajoutais la même variable à deux div différentes avec la méthode appendChild, le contenu de la première div disparaissait. J’ai donc deux fois deux lignes identiques dans mon tableau d’articles : deux images et deux titres. Mon troisième problème a été de bloquer l’overflow derrière la modale. J’ai ajouté une class .modale-open à mon body, qui contient la propriété overflow: hidden, lorsque la modale s’ouvre maos j’ai dû la mettre juste après l’écouteur d’évènement clic alors que j’aurais eu tendance à l’ajouter dans la fonction closeDialog. Sinon, de manière générale, j’ai parfois eu de la difficulté à savoir comment organiser mes fichiers pour le mieux. À quel moment créer un nouveau fichier CSS, qu’est ce que je dois ajouter dedans et quelle règle va dans quel fichier (sachant que plusieurs peuvent aller à deux endroits...).  Mais dans l’ensemble, je pense que ce devoir a bien été, en tout cas, j’y ai pris du plaisir ! '
    ),

    new Article (
        './assets/img/articles/macarons.png',
        'Nouveaux macarons !!',
        'Découvrez nos nouvelles saveurs de macarons !',
        'macarons',
        './assets/img/articles/macarons.png',
        'Nouveaux macarons !!',
        'Clémentine',
        '2 minutes',
        '1 juin 2024',
        'Chez Un Zeste de Clémentine, nous sommes ravis de vous présenter notre nouvelle collection de macarons, une véritable symphonie de saveurs qui saura enchanter les amateurs de ces délicates douceurs. Pour les amoureux des fruits, nous avons créé le macaron aux framboises sauvages, avec une ganache crémeuse et légèrement acidulée qui évoque les beaux jours d\'été. Pour une expérience plus exotique, laissez-vous tenter par notre macaron à la mangue et au fruit de la passion, une explosion de fraîcheur tropicale en bouche. Les amateurs de saveurs plus audacieuses seront comblés par notre macaron chocolat-noisette au piment d\'Espelette, un mariage subtil entre le fondant du chocolat, le croquant de la noisette et une pointe de chaleur épicée. Nous n\'avons pas oublié les inconditionnels de la douceur avec notre macaron à la vanille de Madagascar, un classique revisité avec une vanille aux arômes riches et envoûtants. Enfin, pour une touche de nouveauté, découvrez notre macaron à la lavande et au miel, une combinaison florale et sucrée qui évoque les champs ensoleillés de Provence. Chaque macaron est confectionné avec soin, en respectant les techniques traditionnelles pour obtenir cette coque parfaitement croquante à l\'extérieur et fondante à l\'intérieur. Venez vite découvrir ces nouvelles créations chez Un Zeste de Clémentine, où chaque bouchée est une invitation au plaisir et à la découverte.'
    ),

    new Article (
        './assets/img/articles/biscottis.png',
        'Recette des biscottis',
        'Les biscottis n\'auront plus aucun secret pour vous...',
        'biscottis',
        './assets/img/articles/biscottis.png',
        'Recette des biscottis',
        'Alfredo',
        '2 minutes',
        '15 mai 2024',
        'Nous sommes enchantés de partager avec vous notre recette exclusive de biscottis, ces délicieux biscuits italiens parfaits pour accompagner votre café ou thé. Pour commencer, nous sélectionnons les meilleurs ingrédients : de la farine de blé tendre, des amandes entières légèrement grillées, du sucre de canne doré et des œufs frais. La touche secrète réside dans l\'ajout subtil de zeste d\'orange et d\'un soupçon de vanille pure, qui apportent une saveur délicatement parfumée et unique à chaque bouchée. La pâte est soigneusement pétrie à la main pour obtenir une texture homogène, puis façonnée en longs pains légèrement aplatis. Ces pains sont cuits une première fois au four jusqu\'à ce qu\'ils soient dorés et légèrement croustillants à l\'extérieur. Une fois refroidis, ils sont découpés en tranches fines et remises au four pour une seconde cuisson, afin d\'atteindre ce croquant irrésistible qui caractérise les biscottis. L\'arôme envoûtant qui s\'échappe du four annonce la promesse d\'un moment gourmand. Chaque biscotti offre une parfaite harmonie entre le croquant des amandes et la douceur parfumée de l\'orange et de la vanille. Venez découvrir cette recette chez Un Zeste de Clémentine, où tradition et créativité se rencontrent pour offrir des douceurs inoubliables.'
    ),

    new Article (
        './assets/img/articles/alfredo.png',
        'Alfredo Linguini',
        'Présentation du nouveau membre de l\'équipe.',
        'alfredo',
        './assets/img/articles/alfredo.png',
        'Alfredo Linguini',
        'Clémentine',
        '2 minutes',
        '29 avril 2024',
        'Nous sommes ravis de vous annoncer l\'arrivée d\'Alfredo dans notre équipe chez Un Zeste de Clémentine. Alfredo, pâtissier passionné et expérimenté, apporte avec lui une richesse de connaissances et une créativité débordante qui sauront émerveiller vos papilles. Fort de ses nombreuses années d\'expérience dans des établissements renommés, Alfredo excelle dans l\'art de marier tradition et innovation. Son talent pour créer des pâtisseries et des biscuits uniques, aux saveurs délicates et aux présentations élégantes, est incomparable. Il partage notre philosophie de qualité et d\'excellence, veillant à ce que chaque création soit une véritable œuvre d\'art culinaire. Alfredo est particulièrement connu pour ses viennoiseries fondantes et ses entremets sophistiqués, qui témoignent de son souci du détail et de son engagement à offrir le meilleur à nos clients. Nous sommes impatients de vous faire découvrir ses créations originales et de vous inviter à goûter à la magie pâtissière d\'Alfredo. Venez rencontrer Alfredo et laissez-vous séduire par son enthousiasme contagieux et son amour pour la pâtisserie, chez Un Zeste de Clémentine.'
    ),

    new Article (
        './assets/img/articles/st-honore.png',
        'Histoire de la pâtisserie',
        'Où, quand et pourquoi a-t-on créé le premier St-Honoré ?',
        'histoire',
        './assets/img/articles/st-honore.png',
        'Histoire de la pâtisserie',
        'Alfredo',
        '2 minutes',
        '20 mars 2024',
        'Nous sommes fiers de célébrer l\'art de la pâtisserie française à travers des créations emblématiques, dont le célèbre Saint-Honoré. L\'histoire de la pâtisserie est riche et fascinante, remontant à des siècles de tradition et d\'innovation. Le Saint-Honoré, créé au milieu du XIXe siècle par le pâtissier parisien Chiboust, est une véritable icône de la pâtisserie française. Son nom rend hommage à Saint Honoré, le saint patron des boulangers et pâtissiers. Ce dessert exquis est une merveille de textures et de saveurs, composé d\'une base de pâte feuilletée, de choux garnis de crème Chiboust, et d\'une couronne de choux caramélisés. Chaque élément du Saint-Honoré est réalisé avec un savoir-faire méticuleux, reflétant l\'engagement de la pâtisserie française envers la perfection et l\'élégance. Chez Un Zeste de Clémentine, nous perpétuons cette tradition avec une touche de modernité, en ajoutant des zestes d\'agrumes pour une note de fraîcheur et une dimension supplémentaire de goût. Venez découvrir notre version du Saint-Honoré, où chaque bouchée est une célébration de l\'histoire et de l\'artisanat pâtissier.'
    ),

    new Article (
        './assets/img/articles/ingredients.png',
        'Bien choisir vos ingrédients',
        'Conseils pour trouver du bon beurre et des beaux oeufs',
        'ingredients',
        './assets/img/articles/ingredients.png',
        'Bien choisir vos ingrédients',
        'Alfredo',
        '2 minutes',
        '2 février 2024',
        'Chez Un Zeste de Clémentine, nous croyons fermement que la qualité des ingrédients est essentielle pour créer des pâtisseries exceptionnelles. Voici quelques conseils pour bien choisir vos ingrédients et garantir des résultats délicieux. Premièrement, privilégiez les produits frais et de saison. Les fruits mûrs à point, comme les fraises en été ou les pommes en automne, apporteront des saveurs incomparables à vos créations. Deuxièmement, optez pour des ingrédients biologiques lorsque c\'est possible. Ils sont cultivés sans pesticides chimiques, ce qui préserve leur goût naturel et leur richesse nutritionnelle. Troisièmement, choisissez des matières premières de qualité, comme le beurre AOP, qui confère une texture et une saveur incomparables à vos pâtes et crèmes. Pour la farine, préférez des farines de blé tendre T45 ou T55, idéales pour les pâtisseries fines et légères. Les œufs doivent être frais et, de préférence, issus de poules élevées en plein air. Enfin, n\'hésitez pas à explorer les marchés locaux et les producteurs artisanaux pour découvrir des produits uniques et authentiques. En suivant ces conseils, vous serez assuré de disposer des meilleurs ingrédients pour réaliser des pâtisseries dignes des plus grands chefs. Chez Un Zeste de Clémentine, chaque ingrédient est sélectionné avec soin pour vous offrir des douceurs d\'une qualité exceptionnelle.'
    ),

    new Article (
        './assets/img/articles/chocolat.png',
        'Les bienfaits du chocolats',
        'Apprenez pourquoi manger du chocolat est bon pour la santé !',
        'chocolat',
        './assets/img/articles/chocolat.png',
        'Les bienfaits du chocolats',
        'Clémentine',
        '2 minutes',
        '18 décembre 2023',
        'Chez Un Zeste de Clémentine, nous sommes passionnés par le chocolat et ses innombrables bienfaits. En plus d\'être une gourmandise irrésistible, le chocolat possède de nombreuses vertus pour la santé. Le chocolat noir, en particulier, est riche en antioxydants, notamment les flavonoïdes, qui aident à protéger le corps contre les dommages des radicaux libres. Ces composés bénéfiques contribuent à la santé cardiovasculaire en améliorant la circulation sanguine et en réduisant la pression artérielle. De plus, le chocolat contient des minéraux essentiels tels que le magnésium, le fer et le zinc, qui sont cruciaux pour diverses fonctions corporelles. Consommer du chocolat noir avec modération peut également améliorer votre humeur grâce à la libération d\'endorphines et de sérotonine, les hormones du bonheur. Il est également prouvé que le chocolat aide à réduire le stress et à favoriser une sensation de bien-être général. Chez Un Zeste de Clémentine, nous utilisons du chocolat de haute qualité dans nos créations pour vous offrir non seulement une expérience gustative exquise, mais aussi des bienfaits pour votre santé. Venez savourer nos pâtisseries au chocolat et profitez des bienfaits de cet ingrédient exceptionnel.'
    ),

    new Article (
        './assets/img/articles/gateau-saison.png',
        'Desserts de saison',
        'L\'été arrive, les fruits rouges sont là !',
        'saison',
        './assets/img/articles/gateau-saison.png',
        'Desserts de saison',
        'Alfredo',
        '2 minutes',
        '2 juillet 2023',
        'Chez Un Zeste de Clémentine, l\'été est synonyme de fraîcheur et de gourmandise avec nos délicieux desserts de saison aux fruits rouges. Les fraises, framboises, myrtilles et groseilles, gorgées de soleil, apportent une explosion de saveurs et de couleurs à nos créations pâtissières. Nos tartes aux fruits rouges, avec leur pâte sablée croustillante et leur crème pâtissière onctueuse, sont un véritable régal pour les yeux et les papilles. Nous vous proposons également des verrines légères et rafraîchissantes, où les fruits rouges se marient harmonieusement avec des mousses aériennes et des biscuits savoureux. Pour les amateurs de textures fondantes, nos clafoutis aux cerises et nos coulis de fruits rouges accompagnent parfaitement vos moments de détente estivale. Chaque dessert est préparé avec soin en utilisant des fruits frais et locaux, sélectionnés pour leur qualité et leur goût exceptionnel. Chez Un Zeste de Clémentine, nous célébrons l\'été en mettant à l\'honneur ces trésors de la nature, pour vous offrir des douceurs authentiques et rafraîchissantes. Venez découvrir nos desserts de saison et laissez-vous envoûter par la magie des fruits rouges dans chaque bouchée.'
    ),

    new Article (
        './assets/img/articles/gluten-free.png',
        'Pâtisseries sans gluten',
        'Découvrez nos choix sans gluten mais non sans gourmandise...',
        'gluten',
        './assets/img/articles/gluten-free.png',
        'Pâtisseries sans gluten',
        'Clémentine',
        '2 minutes',
        '17 septembre 2023',
        'Chez Un Zeste de Clémentine, nous savons combien il est important de répondre aux besoins de tous nos clients, y compris ceux qui suivent un régime sans gluten. Nous sommes fiers de vous proposer une sélection de pâtisseries sans gluten, réalisées avec des ingrédients de haute qualité et tout autant de soin et de passion que nos créations traditionnelles. Nos financiers à la farine d\'amande sont légers et moelleux, parfaits pour accompagner une tasse de thé. Pour les amateurs de chocolat, nos brownies sans gluten, riches et fondants, sauront satisfaire les palais les plus exigeants. Nous offrons également des tartelettes aux fruits, avec une pâte croquante à base de farine de riz et de fécule de maïs, garnies de fruits frais de saison. Nos muffins aux myrtilles, réalisés avec de la farine de sarrasin et de la poudre d\'amande, sont une option délicieuse pour un petit-déjeuner ou un goûter sain. Chaque pâtisserie est élaborée avec le plus grand soin pour garantir une texture et un goût exceptionnels, tout en étant parfaitement adaptée aux régimes sans gluten. Chez Un Zeste de Clémentine, nous nous engageons à offrir des douceurs gourmandes et inclusives, afin que chacun puisse savourer le plaisir de la pâtisserie artisanale.'
    )
];

// Sélectionne la section des articles dans le DOM
const articlesSectionHtml = document.querySelector('.articles');

// Crée et configure la div "view"
const view = document.createElement('div');
view.className = ('view');
articlesSectionHtml.appendChild(view)

// Ajoute le texte d'affichage
const affichage = document.createElement('p');
affichage.textContent = 'Affichage :';
view.appendChild(affichage);

// Ajoute un bouton de basculement de vue
const btnToggleView = document.createElement('button');
btnToggleView.className = ('btn-toggle-view');
btnToggleView.textContent = 'Liste';
view.appendChild(btnToggleView);

// Ajoute un titre "Actualités"
const h2ArticlesHtml = document.createElement('h2');
h2ArticlesHtml.classList.add('h2__articles')
articlesSectionHtml.appendChild(h2ArticlesHtml);
h2ArticlesHtml.textContent = "Actualités";

// Crée et configure la div contenant les fiches d'articles
const articlesFichesHtml = document.createElement('div');
articlesFichesHtml.classList.add('articles__fiches');
articlesSectionHtml.appendChild(articlesFichesHtml);


/** Petit detail, j'aurais prefere que cette function soit declarer dans ta class Article */

/** 
 * Convertit un article en élément HTML.
 * @param {Article} article
 * @returns {HTMLDivElement}
 */
function articleToHtml(article) {
    //Crée une div pour une fiche d'article et attribue le data-search au titre de l'article
    const divHtml = document.createElement('div');
    divHtml.className = 'articles__container';
    divHtml.setAttribute('data-search', article.title)

    //Crée une div pour contenir l'image et le texte et la place dans la div articles__container
    const divImgText = document.createElement('div');
    divImgText.className = 'fiche__img__text';
    divHtml.appendChild(divImgText);

    //Crée une div pour contenir l'image la place dans la div fiche__img__text
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('div__img');
    divImgText.appendChild(imgDiv);

    //Crée une balise image, lui attribue la source de article.img, la place dans la div div__img
    const img = document.createElement('img');
    img.src = article.img;
    imgDiv.appendChild(img); 

    //Crée une div pour le texte, lui attribue une classe et la place dans la div fiche__img__text
    const textDiv = document.createElement('div'); 
    textDiv.classList.add('div__text'); 
    divImgText.appendChild(textDiv);

    //Crée une balise h3, lui attribue le string de article.title, la place dans la div div__text
    const titleHeading = document.createElement('h3'); 
    titleHeading.textContent = article.title;
    textDiv.appendChild(titleHeading);

    //Crée une balise p, lui attribue le string de article.desc, la place dans la div div__text
    const pDesc = document.createElement('p'); 
    pDesc.textContent = article.desc;
    textDiv.appendChild(pDesc);

    //Crée une balise button, lui attribue ne class, lui attribue un texte, un attribut data-dialog correspondant à # suivi de article.id puis place le bouton dans la div articles__container
    const btnArticle = document.createElement('button');
    btnArticle.className = 'btn-trigger btn__article';
    btnArticle.textContent = 'En savoir plus';
    btnArticle.setAttribute('data-dialog', ('#' + article.id));
    divHtml.appendChild(btnArticle);

    //Crée une div, lui attribue une class (avec hidden donc caché par défaut), lui attribue un id égale à article.id (pour correspondre au data-dialog du bouton), le place dans le body
    const divDialogArticle = document.createElement('div');
    divDialogArticle.className = 'dialog dialog-article hidden';
    divDialogArticle.id = article.id;
    document.body.appendChild(divDialogArticle);

    //Crée une div, lui attribue une class, le place dans la div dialog dialog-article hidden
    const divDialogArticleWindow = document.createElement('div');
    divDialogArticleWindow.className = 'dialog-article-window';
    divDialogArticle.appendChild(divDialogArticleWindow);

    //Crée un bouton, lui attribue une class, un texte, un attribut data dialog et sa valeur correspondant à # + article.id puis la place dans la div dialog-article-window
    const btnCloseArticle = document.createElement('button');
    btnCloseArticle.className = 'btn-close btn-trigger';
    btnCloseArticle.textContent = 'X';
    btnCloseArticle.setAttribute('data-dialog', '#' + article.id);
    divDialogArticleWindow.appendChild(btnCloseArticle);

     //Crée une div pour le contenu de l'article, lui attribue une classe, et la place dans la div dialog-article-window
    const divDialogArticleContent = document.createElement('div');
    divDialogArticleContent.className = 'dialog-article-content';
    divDialogArticleWindow.appendChild (divDialogArticleContent);

     //Crée une balise image, lui attribue la source de article.img2, et la place dans la div dialog-article-content
    const img2 = document.createElement('img');
    img2.src = article.img2;
    divDialogArticleContent.appendChild(img2);

    //Crée une balise h3, lui attribue le string de article.title2, et la place dans la div dialog-article-content
    const title2 = document.createElement('h3');
    title2.textContent = article.title2;
    divDialogArticleContent.appendChild(title2);

    //Crée une div pour les informations supplémentaires, lui attribue une classe, et la place dans la div dialog-article-content
    const divInfos = document.createElement('div');
    divInfos.className = 'div__infos';
    divDialogArticleContent.appendChild(divInfos);

    //Crée une balise p pour l'auteur, lui attribue le string de article.author, et la place dans la div div__infos
    const author = document.createElement('p');
    author.textContent = 'Auteur: ' + article.author;
    divInfos.appendChild(author);

    //Crée une balise p pour le temps de lecture, lui attribue le string de article.readTime, et la place dans la div div__infos
    const minutes = document.createElement('p');
    minutes.textContent = 'Temps de lecture : ' + article.readTime;
    divInfos.appendChild(minutes);

    //Crée une balise p pour la date de l'article, lui attribue le string de article.date, et la place dans la div__infos
    const dateArticle = document.createElement('p');
    dateArticle.textContent = 'Date : ' + article.date;
    divInfos.appendChild(dateArticle);

     //Crée une balise p pour le contenu de l'article, lui attribue le string de article.para, et la place dans la div dialog-article-content
    const paragraphe = document.createElement('p');
    paragraphe.textContent = article.para;
    divDialogArticleContent.appendChild(paragraphe);

    //Crée une balise p pour le nombre de mots, le calcule en considérant que les mots sont séparés par des spaces grace à la méthode split, et la place dans la div dialog-article-content
    const nbMots = document.createElement('p');
    const mots = article.para.split(' ');
    const nombreDeMots = mots.length;
    nbMots.textContent = nombreDeMots + ' mots';
    divDialogArticleContent.appendChild(nbMots);

    //Retourne la div articles__container
    return divHtml;
}


// Sélectionne le conteneur des articles
const actualites = document.querySelector('.articles__fiches');

// Ajoute chaque article converti en HTML dans le conteneur
articles.forEach(article => {
    actualites.appendChild(articleToHtml(article));
});