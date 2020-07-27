**Etape 1 : la rencontre (~1 heure ?)**



Avec quelle commande Node puis je exécuter ce script ?

  **node index.js**

Que fait ce script ?

**incremente ou décremente un score random**

Que signifie le mot clé const ?
**c'est pour definir une variable**

Quel autre mot clé ressemble un peu à const à l'usage dans ce script ?
**let**

A quoi correspond l'object console et les "trucs" qui le suivent ?
**console.clear: vide la console
console.log : execute le programme**

Quelle est la différence entre la ligne 7, la ligne 9 et la ligne 27 ? D'où pourraient venir ces différences ?

**

Que fait la méthode Math.floor() ?
**arrondi le chiffre**

A quoi sert le while ?
**creer une boucle qui s'execute tant que la condition est verifiée, dans ce cas tant que les joueurs ont plus de 0points, le combat continue** 

Est-ce que la ligne 28 sert à invoquer un petit chat sauvage ? (oui/non sans justifier)
**nooo**

A quoi servent les trois dernières lignes ?
**execute le code et affiche le resultat**


**Etape 2 : la bidouille (~2 heures)**

Proposez deux solutions pour que le combat dure 3 fois plus longtemps en moyenne (des maaaaths !!!)
**passer de 50 a 12;5** 

Que se passe-t-il si on déplace les deux lignes après le while (13 et 14) avant le while ? (Détaillez un peu, testez plusieurs fois)
** 

Si je change le nom de mes joueurs, il y aura un souci d'affichage à un moment : résolvez-le !!
**les noms sont ecrits en dur il faut interpoler le nom des joueurs**

Que se passe-t-il si je remplace les && de la ligne 12 par des || ?
**ça change les "et" en "ou"**


Notre jeu est très injuste envers le joueur 1, pourquoi ? Il existe au moins deux genres approches différentes.
**parceque si le joueur 1 a de la vie, alors le joueur 2 aussi; il faudrait changer la condition**

Que se passe-t-il si je remplace
les const par des let ?
** rien c'est juste de la syntaxe**

les let par des const ?
** les lets sont des variables changeables , si l'on change par const alors la variable ne pourra pas être réassigné, et le compteur ne marchera pas** 

les const et les let par des var ?

**ce n'est plus à utiliser car mal scoper**
Qu'est ce que cela vous évoque ?
** let utile pour les variables qui pourront etre modifiées, const : pour des variables en dur**

Expliquez ce que semble faire la ligne 28
** player1Life = player1Life - puissanceAttaque2; ça incremente à la variable vie du joueur 1 ; le resultat des points de vie - l'attaque du joueur 2**
    

** Etape 3 : on maitrise (~ toute la vie)**
Corrigez le script pour qu'il soit plus juste pour le joueur 1

if (player1Life > 0 && player2Life === 0  ) {
    console.log(`${player1} est vainqueur` , `${player2} est perdant`);

} else if(player1Life === 0 && player2Life > 0 )  {
    console.log(`${player1} est perdant` , `${player2} est gagnant`);

} else {
    console.log(`${player1} et ${player2} sont egalités`);    

}  

Modifiez le script pour qu'une attaque fonctionne 90% du temps et non pas 100% du temps
Et il faut alors afficher à l'écran si l'attaque a échoué



Modifiez le script pour qu'une attaque fonctionne 90% du temps et non pas 100% du temps
Et il faut alors afficher à l'écran si l'attaque a échoué


Faites en sorte que si un joueur dispose de moins de 20 points de vie, il boive une potion (qui va lui redonner 60 points de vie) au lieu de lancer une attaque lorsque son tour arrive.

let potion1 = player1Life + 20;
let potion2 = player2Life + 20;

if (player1Life < 20) {
    console.log(`${player1} Vous avez bu une potion et gagné 20 pts de vie vous avez : ${potion1} points `);
    
}
if (player2Life < 20){
    console.log(`${player2} Vous avez bu une potion et gagné 20 pts de vie vous avez : ${potion2} points `);

}