// Sélection de tous les boutons déclencheurs de modale
const btnsDialogTrigger = document.querySelectorAll('.btn-trigger');
// Sélection de toutes les modales
const dialogs = document.querySelectorAll('.dialog');
// Sélection de l'élément body du document
const bodyHtml = document.querySelector('body');

/**
 * Fonction appelée lors de la fermeture de la modale.
 * @param {Event} e - L'événement déclencheur.
 */
function closingDialog(e) {
    const dialog = e.target;
    bodyHtml.classList.remove('modale-open');
    dialog.classList.add('hidden'); 
    dialog.removeAttribute('closing');
    dialog.removeAttribute('open', '');
    dialog.removeEventListener('animationend', closingDialog);
}

/**
 * Fonction pour fermer la modale.
 * @param {HTMLElement} dialog - L'élément de la modale à fermer.
 */
function closeDialog(dialog) {
    dialog.setAttribute('closing', '');
    dialog.classList.remove('hidden'); 
    console.log(bodyHtml);
    dialog.addEventListener('animationend', closingDialog);
}

// Ajout des écouteurs d'événements sur chaque bouton déclencheur de modale
btnsDialogTrigger.forEach((btn) => {
    btn.addEventListener('click', () => {
        bodyHtml.classList.add('modale-open');
        const dialogSelector = btn.getAttribute('data-dialog');
        const dialog = document.querySelector(dialogSelector);

        if(dialog){
            if(dialog.checkVisibility()){
                closeDialog(dialog);
            } else {
                dialog.setAttribute('open', '');
            }
        }

    });
});

// Ajout des écouteurs d'événements sur chaque modale pour les fermer au clic à l'extérieur
dialogs.forEach(dialog => {
    dialog.addEventListener('click', () => {
        closeDialog(dialog);
    });

    // Empêcher la propagation de l'événement clic à l'intérieur de la modale
    const childrens = dialog.querySelectorAll('& > *');
    childrens.forEach(children => {
        children.addEventListener('click', e => {
            e.stopImmediatePropagation();
        });
    });

});