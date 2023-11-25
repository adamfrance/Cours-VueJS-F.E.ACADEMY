Cette exercice vise à tirer parti de vos connaissances concernant l'application de différentes approches pour travailler avec une source d'API de données externe en créant un blog répertoriant les articles. 

Cette exercice d'application testera vos connaissances de Vue en utilisant toutes les fonctions de base d'un composant à fichier unique ( SFC ) et les méthodes async pour récupérer des données distantes à partir d’une API et utiliser des propriétés calculées pour organiser des structures d’objets profondément imbriquées.
			
Contentful est un système de gestion de contenu ( CMS ) sans header qui vous permet de gérer le contenu séparément de votre référentiel de code. Vous pouvez consommer ce contenu à l'aide de l'API dans autant de référentiels de code que nécessaire. 

Par exemple, vous pouvez avoir un site Web de blog qui fait office de source principale d'informations, mais vos clients souhaitent une page autonome sur un domaine différent qui récupère uniquement les articles les plus récents. L'utilisation d'un CMS sans header vous permet intrinsèquement de développer ces deux bases de codes distinctes et d'utiliser la même source de données mise à jour.


Cette exercice utilisera le Contentful CMS sans header. Les keys d'accès et les points de terminaison seront répertoriés dans la solution.
			
Les étapes suivantes vous aideront à réaliser l’exercice :
			
- Créez un projet Vue à l'aide de l'outil d'échafaudage avec Vite comme outil de gestion de bundle. 
- Installez la dépendance Contentful ( https://www.npmjs.com/package/contentful ) dans votre projet à l'aide de 
```sh
yarn add contentful
```

- Utilisez les propriétés calculées pour générer les données profondément imbriquées à partir de la réponse de l'API.
- Utilisez des props de données pour afficher le nom, le titre du poste et la description de l'utilisateur.
- Utilisez SCSS pour styliser la page.
