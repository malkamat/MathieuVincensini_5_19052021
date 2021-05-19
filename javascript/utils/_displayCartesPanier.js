import { convertPrice } from "../mixins/_convertPrice.js"
import { urlRedirection } from "../mixins/_urlRedirection.js"
import { supprimerArticle } from "./_Panier.js"
const displayCartesPanier = (panier) => {
    const recapBody = document.querySelector(".panier-recap-table-body")
    const html = panier.map(article => {
        return `
        <tr class="panier-recap-table-body-carte">
        <td class="panier-recap-table-body-carte-col1">
        <figure class="panier-recap-table-body-carte-figure">
            <img src="${article.produit.imageUrl}" class="panier-recap-table-body-carte-figure__image">
            <figcaption class="panier-recap-table-body-carte-figure-info">
                <h4  class="panier-recap-table-body-cartepanier-recap-table-body-carte-figure-info__titre">${article.produit.name}</h4>
            </figcaption>
        </figure>
    </td>

    <td class="panier-recap-table-body-carte-col2">
        <strong class="panier-recap-table-body-carte__quantite">${article.quantite} X</strong>

    </td>
    <td class="panier-recap-table-body-carte-col3">
        <div class="panier-recap-table-body-carte-quantite">
            <strong class="panier-recap-table-body-carte-quantite__total">${convertPrice(article.produit.price * article.quantite) }</strong><br>
            <small class="panier-recap-table-body-carte-quantite__unitee"> ${convertPrice(article.produit.price) } / unitée </small>
        </div> <!-- price-wrap .// -->
    </td>
    <td class="panier-recap-table-body-carte-col4">
        <button 
        data-key="${article.produit._id}"
            class="panier-recap-table-body-carte-col4__button--suppr">
            Supprimer </button>
        <button 
        data-key="${article.produit._id}"
           class="panier-recap-table-body-carte-col4__button--modif">
            Modifier </button>
    </td>
    </tr>
      `
    }).join("")

    // panier.forEach(element => {
    //     console.log(element);
    // });
    recapBody.innerHTML = html

    // fonction de redirection vers la page produit
    urlRedirection(".panier-recap-table-body-carte-col4__button--modif")

    const boutonSupprimer = document.querySelectorAll(".panier-recap-table-body-carte-col4__button--suppr")

    boutonSupprimer.forEach(element => {
        element.addEventListener("click", (e) => {
        console.log(e.target.getAttribute("data-key"));
        supprimerArticle(e.target.getAttribute("data-key"))
        displayCartesPanier(panier)
    });
    })
}

export { displayCartesPanier }