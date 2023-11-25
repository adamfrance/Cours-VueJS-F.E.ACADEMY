## Cette activité vise à tirer parti de vos connaissances en combinant différentes API de composition avec les accessoires et événements des composants pour créer une vue dans laquelle l'utilisateur peut voir une liste de blogs et ajouter ou supprimer n'importe quel élément de blog.
			
Cette activité nécessitera l'utilisation d'un CMS headless, Contentful. Les clés d'accès et les points de terminaison sont répertoriés dans la solution.
			
Suivez ces étapes pour réaliser cette activité :
			
- Créez un nouveau projet Vue avec Vite.
- Installez la dépendance contentful  dans votre projet.
- Créez un autre composable, useListAction, qui reçoit une liste de items, et renvoie ce qui suit :
    - addItem: Ajoute un nouvel élément à la liste donnée
    - deleteItem: Supprime un élément en fonction de son ID

- Créer un composable useBlogs , qui récupérera blogs de Contentful et utiliseran useListActions()pour obtenir les actions pour récupérer les blogs.
- Définir useBlogs pour rendre la liste des blogs , un statut loading , un error pour le statut de récupération, et les actions addItem et deleteItem  reçues de useListActions. 
- Le retour de blogs doit être un tableau d'éléments de blog avec les champs suivants : title, description, heroImage, publishDate, et id.
- Créer un composable useSearch , qui reçoit une liste de items, et renvoie ce qui suit :
    - searchTerm: La valeur de recherche.
    - filters: Une liste de champs à filtrer en fonction du choix de l'utilisateur. Par défaut, c'est title.
    - filteredItems: La liste filtrée des éléments donnés.
- Créer un composant BlogEditor  qui affiche plusieurs input champs pour le title champ, le nom de l'auteur, le nom du blog id champ, textarea pour le contenu du blog, et un button  de sauvegarde du blog. Lorsque ce bouton est cliqué, BlogEditor émet un événement addNewItem  avec les détails du nouveau blog comme charge utile et réinitialise les champs.
- Créer un composant Blogs  qui reçoit une liste de blogs, un drapeau isLoading , et un objet error  comme prop, puis restitue l'état du composant en fonction de isLoading et error et les détails de chaque élément de blog sur l'interface utilisateur, le cas échéant.
- Dans Blogs, utiliser useSearch() sur la liste des blogs reçu en prop et affiche une recherche input pour permettre aux utilisateurs de filtrer les blogs selon title.
- Remplacez les itérations de la liste d'origine par la liste filtrée des blogs.
- On ajoute alors fieldset contenant deux input de type checkbox , chaque liaison au tableau de filters. Les deux input les champs auront également des étiquettes correspondantes de By title ou By content , avec des valeurs de title et description respectivement.
- Ajouter un button à chaque ligne du blog affiché dans la liste des blogs, avec une étiquette Supprimer .
- Définissez également un événement emit deleteBlog, pour Blogs.
- En cliquant sur le bouton Supprimer , le composant doit émettre un événement deleteBlog  avec l'id de l'élément de blog comme charge utile.
- Créer un BlogView composant qui restitue BlogEditor et Blogs.
- Dans BlogView, créez un indicateur bascule, showEditor, qui affichera BlogEditor si true. Sinon, le composant affichera un bouton Ajouter un nouveau blog qui fait basculer la valeur de showEditor  lorsque vous cliquez dessus.
- BlogView utilisera useBlogs()et transmettre les données reçues de ce composable ( blogs, isLoading, error,et deleteItem) comme props et événements pour Blogs. Vous devriez lier deleteItem au deleteBlog événement personnalisé de Blogs.
- BlogView lie également le addItem méthode renvoyée par useBlogs() à l'événement addNewItem  de BlogEditor.
- Ajoutez un style CSS aux composants en conséquence.
