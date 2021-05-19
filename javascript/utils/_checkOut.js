import formValidation from "./_formValidation.js"
import {panier,viderPanier} from "./_Panier.js"
export default function checkOut() {




    const Post = async (products, contact) => {
        try {

            let response = await fetch(`http://localhost:3000/api/teddies/order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contact,
                    products
                })
            })
            if (response.ok) {
                viderPanier()
                let responseData = await response.json()
                localStorage.setItem(`confirmation`, JSON.stringify(responseData))
                window.location = `/html/confirmation.html`
            }


        } catch (error) {
            console.log(error);
        }
    }

    const submit = document.querySelector(".panier-checkout-form__submit")

    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const products = []
        for (let i = 0; i < panier.length; i++) {
            products.push(panier[i].produit._id)
        }
        if (products.length > 0) {
           

            Post(products, formValidation())
        } else {
            alert("Votre panier est vide")
        }
    })
}