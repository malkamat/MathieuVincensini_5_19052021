import { convertPrice } from "../mixins/_convertPrice.js"
import { urlRedirection } from "../mixins/_urlRedirection.js"

const displayCartesAccueil = (tableau) => {
    const catalogueGrid = document.querySelector(".catalogue-grille")
    const html = tableau.map(produit => {
        return `
     <figure data-key="${produit._id}" class="catalogue-grille-carte">
        <img src="${produit.imageUrl}" alt="image d'un ours en peluche" class="catalogue-grille-carte__image">
        <figcaption class="catalogue-grille-carte-info">
            <h5 class="catalogue-grille-carte-info__titre">${produit.name}</h5>
            <p class="catalogue-grille-carte-info__prix">${convertPrice(produit.price)}</p>
        </figcaption>
    </figure>
      `
    }).join("")


    catalogueGrid.innerHTML = html

    // fonction de redirection vers la page produit
    urlRedirection(".catalogue-grille-carte")
}

export { displayCartesAccueil }