import { convertPrice } from "../mixins/_convertPrice.js"

const panier = []

const panierLocal = () => {
    panier.splice(0,panier.length)
    for (let i = 0; i < localStorage.length; i++) {
        panier.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
     }
}
const nbArticlesPanier = () => {
    let nbArticlesPanier = 0
    const panierHeader = document.querySelector(".header-top-nav__lien--f290")
    for (let i = 0; i < panier.length; i++) {
        nbArticlesPanier += panier[i].quantite      
     }
     panierHeader.textContent = `Mon panier (${nbArticlesPanier})`   

}
const totalPanier = () => {
    let total = 0
    const totalPanier = document.querySelector(".panier-checkout__titre")
    for (let i = 0; i < panier.length; i++) {
        total += panier[i].produit.price * panier[i].quantite
     }
     if(panier.length > 0) {
             totalPanier.textContent = `Total de votre panier : ${convertPrice(total)}`   
     } else {
      totalPanier.textContent = `Votre Panier est vide 😅`   

     }
}

const supprimerArticle = (key) => {
  localStorage.removeItem(key)
  panierLocal()
  nbArticlesPanier()
  totalPanier()
} 

const viderPanier = () => {
  localStorage.clear()  
}


export {panier,viderPanier , supprimerArticle , panierLocal, nbArticlesPanier , totalPanier }