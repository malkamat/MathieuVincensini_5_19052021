import { convertPrice } from "../mixins/_convertPrice.js"

const displayCarteProduit = (produit) => {
  console.log(produit);
  const sectionProduit = document.querySelector(".produit")
  const html =
    `
       <h1 class="produit__titre">${produit.name}</h1>
     <figure data-key="${produit._id}" class="produit-carte">
        <img src="${produit.imageUrl}" alt="image d'un ours en peluche" class="produit-carte__image">
        <figcaption class="produit-carte-info">
          <div class="produit-carte-info-produit">
            <p class="produit-carte-info-produit__prix">Total : ${convertPrice(produit.price)}</p>
            <p class="produit-carte-info-produit__description">${produit.description}</p>
          </div>
            <div class="produit-carte-info-option">
            <div class="produit-carte-info-option-quantite">
                <label class="produit-carte-info-option-quantite__label">Choisissez le nombre d'articles</label>
                <input  type="range" class="produit-carte-info-option-quantite__input" value="1" min="1" max="10">
                <label  class="produit-carte-info-option-quantite__label2">1 X</label>
            </div>
            <div class="produit-carte-info-option-choix">
            <label class="produit-carte-info-option-choix__label">Choisissez une couleur</label>
            <select class="produit-carte-info-option-choix__select">
            </select>
            </div>
        </div>
        </figcaption>
    </figure>
    <div class="produit-ajouter">
    <button class="produit-ajouter__button">Ajouter au panier</button>
    </div>

      `


  // on place l'éléent creer dans le dom
  sectionProduit.innerHTML = html

  //event listner pour mettre à jour les champs correspondant au prix et à la quantité séléctionné
  const prixTotal = document.querySelector(".produit-carte-info-produit__prix")
  const input = document.querySelector(".produit-carte-info-option-quantite__input")
  const quantiteTexte = document.querySelector(".produit-carte-info-option-quantite__label2")
  let quantite = 1
  input.addEventListener("input", (e) => {
    quantite = parseInt(e.target.value ) 
    quantiteTexte.textContent = `${e.target.value} X`
    prixTotal.textContent = `Total : ${convertPrice(produit.price * e.target.value)}`
  })

  // logique bouton ajouter au panier

  const ajouterPanierButton = document.querySelector(".produit-ajouter__button")

  ajouterPanierButton.addEventListener("click", (e) => {
    localStorage.setItem(produit._id,JSON.stringify({produit,quantite}))
    window.location = `../html/panier.html`
  })
  // choix options de l'article
  const option = document.querySelector(".produit-carte-info-option-choix__select")
  const htmlOption = produit.colors.map(element => {
   return `
   <option value="${element}">${element}</option>     
    `
  }).join("")

  option.innerHTML = `<option value="Classique">Classique</option> ${htmlOption}`

}


export { displayCarteProduit }