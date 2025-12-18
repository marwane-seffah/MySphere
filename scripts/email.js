function createEmail (event) {
    // https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault() // empêcher la page de se recharger
    let prenom = document.getElementById('prenom').value
    let nom = document.getElementById('nom').value
    let mail = document.getElementById('mail').value

    let genre
    if (document.getElementById('femme').checked) {
        genre = "une utilisatrice"
    } else if (document.getElementById('homme').checked) {
        genre = "un utilisateur"
    } else if (document.getElementById('kebab').checked) {
        genre = "un kebab"
    }
    let msg = document.getElementById('impression').value

    // https://captainverify.com/fr/blog/personnaliser-mailto.html
    let contenu = `&body=Bonjour, voici mon retour ! \nJe m'intitule ${nom} ${prenom} et je suis ${genre} qui voulait vous transmettre ce messgae: \n
${msg} \nEt voici mon mail: ${mail}. \nVoilà, bonne journée !`
    let lien = "mailto:marwane.seffah@etu.univ-amu.fr;tasnim.sebri@etu.univ-amu.fr;lucie.piannelli@etu.univ-amu.fr"
    let objet = `?subject=Retour de ${prenom}`

    window.location.href = lien + objet + contenu
}