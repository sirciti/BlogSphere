# BlogSphere
 Blog_information

 améliorations à apporter?! n'hésite pas !

 📂 Structure du projet finalisée

Séparation des fichiers statiques dans /public
Ajout de /config/database.js pour la connexion MongoDB
Ajout de /models/Article.js pour le modèle d'articles
🚀 Développement du serveur Node.js avec Express.js

Routes pour la gestion des articles (GET /articles, POST /articles)
Routes pour servir les pages (/blog, /about, /contact)
Gestion des actions via POST /blog-action
🐳 Dockerisation complète du projet

Ajout d’un Dockerfile et d’un docker-compose.yml
Environnement isolé pour éviter toute installation locale
🛠️ Optimisation et correction des erreurs

Suppression des options MongoDB obsolètes (useNewUrlParser, useUnifiedTopology)
Vérification et correction des warnings
✅ Tests et validation

Démarrage du serveur sur http://localhost:3000
Connexion réussie à MongoDB


# évo saison 14 : mettre un place un docker swarm sur la VM server kourou et utiliser un projet existant  pour le déployer avec swarm.
Recommander d'utiliser un projet déjà développé et pour lequel vous avez probablement déjà un docker-compose (compose.yaml).

Pour déployer BlogSphere avec Docker Swarm sur la VM kourou, voici les fichiers à modifier et créer :

# Fichiers à modifier :
docker-compose.yml
Adapter les services pour Swarm (deploy, replicas, restart_policy).
deploy: permet à Swarm de gérer les réplicas du service.
Remplacer les volumes et réseaux locaux par des volumes et réseaux Swarm.

server.js (si nécessaire)
Vérifier qu'il écoute sur 0.0.0.0 pour accepter les connexions externes.
👉 0.0.0.0 permet au serveur d'être accessible depuis l'extérieur du conteneur Docker.
👉 C'est obligatoire pour que le service fonctionne sur Docker Swarm.

# Nouveaux fichiers à créer :

docker-stack.yml (remplace docker-compose.yml pour Swarm)
Décrit les services (app, base de données).
Définit le scaling (replicas).

swarm-init.sh (script d'initialisation)
Configure Swarm (docker swarm init).
Ajoute des nœuds si besoin (docker swarm join).

swarm-deploy.sh
Déploie la stack (docker stack deploy).
Vérifie l’état des services (docker service ls).
Ces fichiers permettront d’orchestrer BlogSphere sur Docker Swarm proprement et efficacement. 🔥🚀
