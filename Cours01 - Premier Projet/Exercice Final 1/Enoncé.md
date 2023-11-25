Cette exercice vise à tirer parti de vos connaissances actuelles sur les fonctionnalités de base d'un SFC, telles que les expressions, les boucles, la liaison bidirectionnelle et la gestion des événements.
			
Cette application devrait permettre aux utilisateurs de créer et de supprimer des éléments de liste individuels et d'effacer la liste totale en un seul clic.
			
Les étapes suivantes vous aideront à réaliser l’exercice :
			
- Créez un formulaire interactif dans un composant en utilisant une entrée liée à v-model.
- Ajoutez un champ de saisie auquel vous pouvez ajouter des éléments de liste de courses. Autoriser les utilisateurs à ajouter des éléments à l'aide de la touche Entrée en liant une méthode à l'événement @keyup.enter
- Les utilisateurs peuvent s'attendre à effacer la liste en supprimant tous les éléments ou en les supprimant un par un. Pour faciliter cela, vous pouvez utiliser une méthode delete , qui peut transmettre la position du tableau comme argument, ou simplement écraser l'ensemble des données de la liste de courses par un tableau vide , [].