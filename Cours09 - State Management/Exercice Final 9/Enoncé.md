#### Dans un générateur de profil, vous consultez un profil pour trouver des informations sur l'individu. L’ organisation, l’adresse e-mail et le numéro de téléphone d’une personne sont souvent les informations les plus cruciales recherchées sur une carte de profil. Cette activité consiste à ajouter ces détails à un générateur de carte de profil


- Pour ce faire, nous ajouterons les champs Organization, Email, et Phone Number dans AppProfileForm et AppProfileDisplay:
			
- Commencez par ajouter le champ de saisie organization  et étiquette à AppProfileForm.
- Ensuite, ajoutez un nouveau champ de saisie email  et étiquette à AppProfileForm pour le champ Email .
- On peut alors ajouter un nouveau phone champ de saisie (du tel type) et une étiquette à AppProfileForm pour le champ Phone Number .


- On peut alors ajouter les champs organization, email, et phone  à l'état initial dans src/store.js pour que les valeurs soient définies puis mises à jour clear pour réinitialiser les nouvelles valeurs.
			
- Pour organization à afficher, on l'ajoute après occupation dans src/components/AppProfileDisplay.vue. Nous le préfixerons avec le "at" chaîne littérale et ne l'affiche que lorsqu'il y a une valeur. Le résultat final est un paragraphe qui inclut la profession et l’organisation.
- Pour email pour l'afficher, nous devons le restituer dans src/components/AppProfileDisplay.vue en utilisant un paragraphe conditionnel (pour masquer l'étiquette Email  lorsqu'il n'y a pas d'adresse e-mail définie).
- Pour afficher phone, nous devons le restituer dans src/components/AppProfileDisplay.vue en utilisant une étendue conditionnelle (pour masquer l'étiquette Phone Number  lorsqu'il n'y a pas de téléphone).