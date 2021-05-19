
export default function formValidation() {
    class Contact {
        constructor(firstName, lastName, address, city, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.email = email
        }
    }
    
    const nom = document.querySelector(".panier-checkout-form-group__input-firstName")
    const prenom = document.querySelector(".panier-checkout-form-group__input-lastName")
    const adresse = document.querySelector(".panier-checkout-form-group__input-address")
    const ville = document.querySelector(".panier-checkout-form-group__input-city")
    const email = document.querySelector(".panier-checkout-form-group__input-email")
    const regexMail  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!nom.value || !prenom.value || !adresse.value || !ville.value || !email.value) {
            return alert("veuillez renseigner tous les champs")
        } 
        if(prenom.value.length > 50 || prenom.value.length < 1 ) {
            return alert("Le nom doit contenir entre 1 et 50 caracteres")
        } 
        if(nom.value.length > 50 || nom.value.length < 1 ) {
            return alert("Le prenom doit contenir entre 1 et 50 caracteres")
        } 
        if(adresse.value.length > 50 || adresse.value.length < 1 ) {
            return alert("L'adresse doit contenir entre 1 et 50 caracteres")
        } 
        if(ville.value.length > 50 || ville.value.length < 1 ) {
            return alert("La ville doit contenir entre 1 et 50 caracteres")
        } 
        if(email.value.length > 50 || email.value.length < 1 ) {
            return alert("L'email doit contenir entre 1 et 50 caracteres")
        } 

        if(email.value.match(regexMail)) {
            const contact = new Contact(nom.value , prenom.value, adresse.value, ville.value , email.value)
            return contact
        }
        else {
            return alert("L'email saisie est invalide")
        }
}
