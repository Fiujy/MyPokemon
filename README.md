# My Pokémon Project

Ce projet utilise Docker Compose pour orchestrer trois services : un frontend, un backend, et une base de données PostgreSQL.

## Prérequis

Avant de commencer, vous devez avoir installé :

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuration de l'environnement

Avant de démarrer les services, vous devez configurer les variables d'environnement.

1. Créez un fichier `.env` à la racine du projet.
2. Copiez le contenu de `.env.example` dans `.env`:

```
# Configuration des ports
FRONTEND_PORT=5173
BACKEND_PORT=3000
DB_PORT=5432

# Configuration de la base de données
POSTGRES_HOST=db
POSTGRES_USER=pokemon
POSTGRES_PASSWORD=pokemon
POSTGRES_DB=pokemon

# URL de l'API pour le frontend
VITE_API_URL=http://backend:${BACKEND_PORT}
```

Comme la configuration ne contient aucune donnée sensible, je laisse tout dans l'example. Vous pouvez vous baser sur cette configuration pour ne pas vous prendre la tête. 


Assurez-vous que ces variables sont bien définies, en particulier les paramètres de la base de données et les ports.

## Démarrer les services

Une fois que le fichier `.env` est configuré, vous pouvez démarrer les services avec Docker Compose.

1. Exécutez la commande suivante pour démarrer les services frontend, backend et la base de données PostgreSQL :

```bash
docker compose up --build
```

2. Docker Compose va construire les images et démarrer les services. Une fois terminé, vous pouvez accéder à :
```
http://localhost:5173 #Frontend
http://localhost:3000 #Backend
```

## Arrêter les services
Pour arrêter les services, exécutez simplement :

```bash
docker compose down
```
Cela arrêtera tous les conteneurs et supprimera les réseaux créés par Docker Compose.

## Notes
Le frontend et le backend sont configurés pour communiquer entre eux via les variables d'environnement définies dans le fichier .env.
La base de données PostgreSQL sera initialisée avec les paramètres définis dans le fichier .env.
Si vous avez besoin de réinitialiser la base de données, vous pouvez supprimer le volume Docker postgres_data en exécutant :
```bash
docker compose down -v
```

Cela supprimera les volumes associés à la base de données.


### Explication des étapes :

1. **Fichier `.env`** : Ce fichier contient les variables d'environnement utilisées pour configurer les services Docker. Assurez-vous que les variables comme `POSTGRES_HOST`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, etc. sont correctement configurées.

2. **Démarrer les services avec Docker Compose** : Une fois que vous avez créé le fichier `.env`, vous pouvez lancer les services avec `docker compose up --build`. Cela va construire les images et démarrer les services (frontend, backend et base de données).

3. **Arrêter les services** : Utilisez `docker compose down` pour arrêter les services en cours d'exécution. Pour supprimer les volumes, vous pouvez utiliser l'option `-v`.

N'hésitez pas à personnaliser le fichier `.env` en fonction de vos besoins.


