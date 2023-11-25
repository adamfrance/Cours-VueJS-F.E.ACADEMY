Dans cette activité, vous allons créer une application de tâches qui intègre jsonplaceholder comme source de données.
			
Votre application de tâches chargera les tâches et les affichera sous forme de liste. Elle affichera une case à cocher selon que la tâche est terminée ou non, ainsi que le nom de la tâche.

Lorsque vous cochez une tâche, l'application la synchronisera avec l'API.
			
Nous injecterons Axios en tant que plugin pour interroger https://jsonplaceholder.typicode.com .

## Suivez ces étapes pour réaliser cette activité :
			
- Installer axios dans le projet.
- Injecter axios comme une propriété dans ces instances de composant, créez un fichier src/plugins/axios.js qui, lors de l'installation, signifiera que les instances de composants auront une propriété injectable axios .
- Pour que le plugin fonctionne, importez-le et enregistrez-le dans src/main.js.
Nous souhaitons également injecter nos API $baseUrl dans tous nos composants dans une portée globale. Nous allons créer un plugin en ligne avec le fichier src/main.js  pour ce faire.
- Nous voulons maintenant récupérer toutes les tâches de src/App.vue. Un bon endroit pour le faire est dans la méthode mounted  du cycle de vie .
- Pour afficher la liste de tâches, nous allons créer un composant TodoList  dans src/components/TodoList.vue qui prend une prop todos , parcourt les éléments et diffère le rendu de la tâche sous un emplacement todo  limité qui lie la tâche.
- Nous pouvons maintenant utiliser le composant TodoList  pour afficher les tâches que nous avons déjà récupérées src/App.vue.
- Il nous faut maintenant créer un composant TodoEntry  où nous implémenterons la plupart de la logique spécifique aux tâches. Une bonne pratique pour les composants consiste à ce que les accessoires soient très spécifiques au rôle du composant. Dans ce cas, les propriétés de l'objet todo  que nous allons aborder est id, title, et completed, donc ce devraient être les accessoires que notre composant TodoEntry  reçoit. Nous ne ferons pas de TodoEntry un composant fonctionnel puisque nous aurons besoin d'une instance de composant pour créer des requêtes HTTP.
- Nous mettrons ensuite à jour src/App.vue pour qu'il consomme TodoEntry (en veillant à lier id, title, et completed).
- Ajoutez la possibilité de basculer l' état Terminé d'un todo. Nous mettrons en œuvre la majorité de ces mesures dans src/components/TodoEntry.vue. Nous écouterons le input. En cas de changement, nous voudrons lire la nouvelle valeur et envoyer une demande PATCH  à /todos/{todoId} avec un objet contenant completed  sur la nouvelle valeur. Nous voudrons également émettre un événement completedChange dans Vue.js afin que le composant App  peut mettre à jour les données en mémoire.
- Dans App.vue, nous voudrons mettre à jour les informations pertinentes todo quand completeChange est déclenché. Comme completeChange n'inclut pas l'identifiant du todo, nous devrons lire cela dans le contexte lors de la définition de la fonction handleCompleteChange  pour écouter completeChange.