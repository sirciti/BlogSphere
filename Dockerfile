# Dockerfile
FROM node:18

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers nécessaires
COPY package.json package-lock.json ./

# Installation des dépendances
RUN npm install

# Copie du reste du code
COPY . .

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["node", "server.js"]