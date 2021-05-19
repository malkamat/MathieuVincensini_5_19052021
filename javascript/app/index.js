import  {panierLocal,nbArticlesPanier}  from "../utils/_Panier.js"
import { displayCartesAccueil}  from "../utils/_displayCartesAccueil.js"
import fetchApi  from "../mixins/_fetchApi.js"

const api = "http://localhost:3000/api/teddies"

 fetchApi(api,displayCartesAccueil)
 panierLocal()
 nbArticlesPanier()
  
