### Créer un panier simple et un calculateur de prix

Imaginez un hypothétique site matériel d'entreprise qui permet aux employés de sélectionner les produits dont ils ont besoin pour être expédiés à leur bureau. Ce panier est beaucoup plus simple qu'un site de commerce électronique classique, car il n'a pas besoin de traiter les cartes de crédit ni même de demander à la personne où elle se trouve (l'informatique sait où vous êtes assis !).

Il doit toujours vous présenter une liste d'articles, vous permettre de sélectionner le montant que vous souhaitez, puis vous fournir un prix total qui sera facturé à votre service.

Dans cette activité, vous devez construire un store Pinia qui représente les produits disponibles et leurs prix. Vous aurez besoin de plusieurs composants pour gérer les différents aspects de l'application et interagir correctement avec les données du magasin :

    Commencez par créer un nouveau Pinia. Votre store doit utiliser deux valeurs dans l'état, un tableau de produits avec des noms et des valeurs codés en dur et un tableau de paniers vides. Voici un exemple de liste de produits :

        products: [

      { name: "Widgets", price: 10 },

      { name: "Doodads", price: 8 },

      { name: "Roundtuits", price: 12 },

      { name: "Fluff", price: 4 },

      { name: "Goobers", price: 7 }

    ],

    Votre candidature comprendra trois éléments: 
        1 - Le premier est un composant Products pour lister les produits. 
        2 - Le second est un composant Cart  qui restitue le panier actuel. 
        3 - Enfin, il existe un composant Checkout , qui restitue le total avec un bouton de paiement pas vraiment fonctionnel .

Le composant Products.vue doit afficher chaque produit et disposer d'un bouton permettant de l'ajouter et de le supprimer du panier. Ces boutons doivent appeler des actions dans la boutique Pinia et ajouter ou supprimer un article du panier :

    Le composant Cart.vue affiche un tableau des articles dans le panier. Il doit indiquer le nom du produit et la quantité actuelle. Si un élément de store arrive à zéro, il ne doit pas être affiché dans le tableau. 

    Le composant Checkout.vue  rendra deux choses. 
        - Premièrement, cela donnera un coût total. Il affiche les produits et la quantité dans le panier. 
        - Deuxièmement, un bouton de paiement , mais uniquement s'il existe un coût réel. Le bouton Commander ne nécessite aucune action
