import  {panierLocal,nbArticlesPanier}  from "../utils/_Panier.js"
import { displayCarteProduit}  from "../utils/_displayCarteProduit.js"
import fetchApi  from "../mixins/_fetchApi.js"


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("produit")
const api = `http://localhost:3000/api/teddies/${id}`

panierLocal()
nbArticlesPanier()
fetchApi(api,displayCarteProduit)