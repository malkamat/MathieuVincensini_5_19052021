export default async function displayRecap() {
    //on récupere a confirmation dans le localStorage
    const confirmation = JSON.parse(localStorage.getItem("confirmation"))
    confirmation
    // on vient saisire l'élément html ou mettre es infos de contacts
    const contact = document.querySelector(".confirmation-article-recap-contact-liste")
    // html des infos de contacts
    const htmlContact = `
    <li class="confirmation-article-recap-contact-liste__item">${confirmation.contact.firstName}</li>
    <li class="confirmation-article-recap-contact-liste__item">${confirmation.contact.lastName}</li>
    <li class="confirmation-article-recap-contact-liste__item">${confirmation.contact.address}</li>
    <li class="confirmation-article-recap-contact-liste__item">${confirmation.contact.city}</li>
    <li class="confirmation-article-recap-contact-liste__item"> ${confirmation.contact.email}</li>
    `
    // on place notre html dans le dom
    contact.innerHTML = htmlContact

        // on vient saisire l'élément html ou mettre les infos des produits
    const recapProduits = document.querySelector(".confirmation-article-recap-produits-liste")
    // on créer l'élémént html pour chaque produit acheté
    const htmlProduits = confirmation.products.map(element => {
        return `
    <li class="confirmation-article-recap-produits-liste__item">${element.name}</li>
    
    `
    }).join("")

        // on place notre html dans le dom
    recapProduits.innerHTML = htmlProduits

            // on vient saisire l'élément html ou mettre l'id de commande'
    const recapId = document.querySelector(".confirmation-article-recap-produits__titre--id")
    recapId.textContent = confirmation.orderId

    localStorage.clear()
}