export function urlRedirection(querySelector) {
     const produits = document.querySelectorAll(querySelector)
      produits.forEach(element => element.addEventListener("click", (e) => {
      const id = element.getAttribute("data-key")
      window.location = `/html/produit.html?produit=${id}`
}))
}

