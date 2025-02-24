const express = require('express');
const connectDB = require('./config/database');
const Article = require('./models/Article'); // Import du modèle Article
const path = require('path');
const app = express();
connectDB();
const PORT = 3000;

// Middleware pour servir les fichiers statiques (CSS, images...)
app.use(express.static('public'));
app.use(express.json());

// Route d'accueil
app.get('/', (req, res) => {
    res.send('Bienvenue sur BlogSphere API');
});

// Routes pour les articles
app.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des articles" });
    }
});

// Route pour créer un article
app.post('/articles', async (req, res) => {
    try {
        const article = new Article(req.body);
        await article.save();
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'article" });
    }
});

// Routes supplémentaires servant des fichiers HTML
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route pour gérer une action spécifique sur le blog
app.post('/blog-action', (req, res) => {
    console.log('Action Blog exécutée');
    res.json({ message: 'Action réussie' });
});

// Lancer le serveur en écoutant sur 0.0.0.0 pour Docker Swarm
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
