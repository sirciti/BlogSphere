// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://adminsphere:9hR5Nkyx15bYDSSa@blogsphere.86qck.mongodb.net/blogSphere');
        console.log('Connecté à MongoDB');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
        process.exit(1); // Quitter l'application en cas d'erreur critique
    }
};

module.exports = connectDB;

