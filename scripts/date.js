// La fonction qui mettra à jour l'heure
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

window.addEventListener("load", () => {
    function majHeure () {
        let heure = new Date().toLocaleString()
        let baliseHeure = document.getElementById('heure') // Changera l'heure pour la balise d'id "heure"
        baliseHeure.innerHTML = heure
    }
    majHeure()
    setInterval(majHeure, 1000) // Toutes les secondes on appelle la fonction qui va changer l'heure
})