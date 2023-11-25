Cette activité vise à tirer parti de vos connaissances sur Vue Router concernant l'enregistrement des routes et la gestion des routes dynamiques, des routes imbriquées et des Hooks de route pour créer une SPA Message. 

Cette application permettra aux utilisateurs de rédiger de nouveaux messages, d'afficher un flux de messages et de naviguer entre les messages pour voir leurs détails :
			
- Créer un MessageEditor vue (à src/views/MessageEditor.vue), ce qui rendra une vue avec textarea à l'utilisateur, et un bouton submit  pour enregistrer le message.
- Enregistrez l'itinéraire editor  avec MessageEditor comme son point de vue dans src/router/index.js.
- Créer un MessageList vue (à src/views/MessageList.vue) qui affichera une liste de message id valeurs enveloppées par une balise a, qui dirigera vers la page de message unique avec le id lors de la sélection.
- Enregistrez l'itinéraire list  avec MessageList comme son point de vue dans src/router/index.js.
- Ajouter le Messages vue (à src/views/Messages.vue), qui affichera des liens vers editor ou list comme routes imbriquées et restituer la vue imbriquée en conséquence.
Lorsque l'utilisateur s'éloigne de editor, si du contenu n'a pas encore été soumis, affichez un message lui demandant s'il souhaite l'enregistrer avant de quitter. Yes continuera et No abandonnera la navigation.
- Ajouter un Message vue (à src/views/Message.vue), qui restituera le contenu du message à partir de props, et un back bouton pour revenir à la vue précédente. Par défaut, il devrait aller à messages.
- Enregistrez le Message vue avec l'itinéraire dynamique de message/:id dans src/router/index.js.
- Améliorez l'interface utilisateur en créant deux mises en page simples différentes, une pour messages (avec le titre seulement) et un pour message(avec le titre et le back bouton).