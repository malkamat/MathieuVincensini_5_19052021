 export function convertPrice(prix) {
    const longueur = prix.toString().length
    const euro = prix.toString().split("").splice(" ",longueur - 2).join("")
    const centimes = prix.toString().split("").splice(longueur - 2, longueur - 1).join("")
    return `${euro}.${centimes} €`
}

