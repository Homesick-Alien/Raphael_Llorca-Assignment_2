document.getElementById('fetchButton').addEventListener('click', () => {
    const number = Math.floor(Math.random() * 100);
    
    fetch(`/votre-endpoint?number=${number}`)
        .then(response => response.json())
        .then(data => {
            const responseContainer = document.getElementById('responseContainer');
            responseContainer.innerHTML = `JSON Response : ${JSON.stringify(data)}`;
            responseContainer.classList.add('visible');
        })
        .catch(error => console.error('AJAX request error :', error));
});
