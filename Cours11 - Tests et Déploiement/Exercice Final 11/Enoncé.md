Nous avons déjà créé une page de liste de publications, une page d'affichage d'une seule publication et une page de publications par balise. Un excellent moyen de faire resurgir l’ancien contenu d’un blog consiste à mettre en œuvre une bonne fonctionnalité de recherche. Nous ajouterons une fonctionnalité de recherche à la page PostList :

- Créez le formulaire de recherche avec une entrée et un bouton dans un nouveau fichier à src/components/SearchForm.vue.
    - Nous allons maintenant afficher le formulaire en l'important et en le rendant sur src/App.vue.

    - Nous sommes maintenant prêts à ajouter un test instantané pour le formulaire de recherche. Dans __tests__/SearchForm.test.js, il faudrait ajouter SearchForm qui match l'HTML attendu.
    - Nous souhaitons suivre le contenu de la saisie du formulaire de recherche en utilisant v-model pour lier dans les deux sens la variable d'instance searchTerm  et le contenu de l'input.
    - Lorsque le formulaire de recherche sera soumis, nous devrons mettre à jour l'URL avec le bon paramètre. Cela peut être fait avec this.$router.push(). Nous stockerons la recherche dans un paramètre de requête q.
    - Nous voudrons refléter l'état du paramètre q de requête dans la saisie du formulaire de recherche. Nous pouvons le faire en lisant q depuis this.$route.query et en le définissant comme valeur initiale pour le champ de données searchTerm dans le state du composant SearchForm .
    - Ensuite, nous voudrons filtrer les messages transmis à PostList sur la page d'accueil. Nous utiliserons route.query.q dans une propriété calculée qui filtre les publications par leur titre. Cette nouvelle propriété calculée sera alors utilisée à la place des publications dans src/App.vue.
    - Ensuite, nous devrions ajouter un test qui modifie le paramètre de requête de recherche et vérifier que l'application affiche le bon résultat. Pour ce faire, nous pouvons importer src/App.vue et @/router.js, et restituez l'application avec le magasin et le routeur. Nous pouvons alors mettre à jour le contenu du champ de recherche. Enfin, nous pouvons soumettre le formulaire en cliquant sur l'élément où se trouve l'ID du test Search (qui est le bouton de recherche).


Nous pouvons désormais effectuer une recherche dans le formulaire de recherche dans l'application