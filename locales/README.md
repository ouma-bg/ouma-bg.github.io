# Traductions FR / EN

Les deux dictionnaires `fr.js` et `en.js` partagent les mêmes clés : le texte français d’origine, sans espaces autour. Modifier les valeurs permet de corriger les traductions. Les noms de technologies, d’entreprises et les titres officiels des badges restent inchangés.

`i18n.js` applique les traductions au texte et aux attributs accessibles, sans reconstruire les composants. Cela conserve la page active, les filtres, le formulaire et la position du carrousel. Il gère aussi les compteurs, niveaux et dates. Les données métier et les filtres conservent leurs identifiants français ; seul leur affichage change.

Langue par défaut : français. Préférence mémorisée sous `portfolio-language`. `npm test` vérifie la parité et la couverture des descriptions.

Le bouton globe bascule directement FR ↔ EN. Son libellé accessible annonce la langue de destination.
