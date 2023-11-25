Cette activité vise à exploiter les composants, les props, les événements et les références pour restituer une interface de discussion dans laquelle l'utilisateur peut ajouter des messages et les afficher.
			
Suivez ces étapes pour réaliser cette activité :
			
- Créer un composant MessageEditor  (dans src/components/MessageEditor.vue) qui affiche un champ textarea  à l’utilisateur.
- Ajouter un message variable d'instance réactive à MessageEditor, par défaut ''.
- Ecouter les événements change  pour textarea et définissez la valeur de message à la valeur du contenu de textarea (il est exposé comme valeur de l'événement).
- Ajouter un bouton Send  qui, sur click, émet un événement send  avec un message comme charge utile.
- Ajouter un main composant à src/App.vue qui rend MessageEditor.
- Dans App, Ecouter les événements send  de MessageEditor et stockez chaque message dans une variable messages  de données réactive ( messages est un tableau).
- Créer un MessageFeed (dans src/components/MessageFeed.vue) qui demande une prop messages, qui est un tableau.
- Dans MessageFeed, restitue chaque message transmis par la prop messages  dans un paragraphe (le p élément).
- Importer et rendre MessageFeed dans App, liant le messages variable d'instance d'application comme prop messages  de MessageFeed.
- Améliorer MessageEditor afin que le message soit réinitialisé et ciblé après l'envoi du message. Pour ce faire, nous devrons définir textarea.value à l'aide d'une référence, réinitialisez le message variable d'instance en conséquence, et utilisez textarea.focus() pour revenir directement sur textarea.
			
Note
			
Le moyen le plus simple de réinitialiser textarea peut être d'utiliser v-model="message" en premier lieu au lieu de lier @change et une synchronisation manuelle de textarea.value à message.