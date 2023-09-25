const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques depuis le répertoire 'public'
app.use(express.static('public'));

// Premier endpoint statique pour servir 'index.htm'
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.htm');
});

// Troisième endpoint dynamique (API) qui renvoie une réponse JSON basée sur un paramètre 'number'
app.get('/votre-endpoint', (req, res) => {
  // Récupérez le paramètre 'number' de la requête
  const number = req.query.number;

  // Vérifiez si 'number' est défini et est un nombre
  if (number !== undefined && !isNaN(number)) {
    // Utilisez 'number' pour générer une réponse JSON
    const result = { message: `Vous avez fourni le nombre ${number}` };
    res.json(result);
  } else {
    // En cas d'erreur ou de paramètre manquant
    res.status(400).json({ error: 'Paramètre "number" non valide ou manquant' });
  }
});

// Démarrage du serveur Express
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
