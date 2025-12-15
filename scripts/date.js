// La fonction qui mettra à jour l'heure
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

window.addEventListener("DOMContentLoaded", () => {
    function majHeure () {
        let date = new Date().toLocaleString();
        let baliseDate = document.getElementById('date'); // Changera l'heure pour la balise d'id "heure"
        baliseDate.innerHTML = date;
    }
    majHeure();
    setInterval(majHeure, 1000); // Toutes les secondes on appelle la fonction qui va changer l'heure
})