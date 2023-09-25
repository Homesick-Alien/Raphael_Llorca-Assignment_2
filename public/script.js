document.getElementById('fetchButton').addEventListener('click', () => {
    const number = Math.floor(Math.random() * 100); // Exemple : nombre aléatoire
    
    fetch(`/votre-endpoint?number=${number}`)
        .then(response => response.json())
        .then(data => {
            const responseContainer = document.getElementById('responseContainer');
            responseContainer.innerHTML = `Réponse JSON : ${JSON.stringify(data)}`;
        })
        .catch(error => console.error('Erreur de requête AJAX :', error));
});