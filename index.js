// definition des constantes du jeu // 
function combat() {

const player1 = 'Pikachu';
const player2 = 'Miaouss';
let player1Life = 100;
let player2Life = 100;


// 

let output= "";
 
console.clear();
output += '///////////////////////////////////// <br>' ;
output += ' C\'est l\'heure du dueeeeeeeeel "<br>"!';
output += `/////////////////////////////////////`;
output += '';

// programme defini par une boucle avec des conditions //


while (player1Life > 0 && player2Life > 0) {
    const puissanceAttaque1 = Math.floor(Math.random() * 50) ;
    const puissanceAttaque2 = Math.floor(Math.random() * 50);

    // constantes pour 90% de reussites de l'attaque et 10% echouée //

    const attaquereussie1 = Math.floor(Math.random() * 100);
    const attaquereussie2 =  Math.floor(Math.random() * 100);
  

    output +='';
    output +=`${player1} (${player1Life})  -  ${player2} (${player2Life})`;

// bloc d'attaques   //

    if (attaquereussie1 <10 ) {
        output +='attaque éclair a échouée';

    }else { output +=`${player1} attaque et enlève ${puissanceAttaque1} points de vie`;
            player2Life = player2Life - puissanceAttaque1;
    }


    if (attaquereussie2 <10 ) {
        output +='son attaque a échouée';

    }else { output +=`${player2} attaque et enlève ${puissanceAttaque2} points de vie`;
    player1Life = player1Life - puissanceAttaque2;
    }
    


// ajout de potion   //
if (player1Life < 20) {
    let potion1 = player1Life +30 + Math.floor(Math.random() * 60 );
    player1Life = potion1;
    output +=`${player1} Vous avez bu une potion et gagné  ${potion1} Pv vous avez : ${player1Life} points `;
    
}
if (player2Life < 20){
    let potion2 = player2Life + 30+ Math.floor(Math.random() * 60 );
    player2Life = potion2;
    output +=`${player2} a bu une potion et gagné ${potion2}PV vous avez : ${player2Life} points `;

}
}

//affiche le resultat du programme// 

output +="/////////////////////////////////////";
output +="Le Combat est terminé!" ;

if (player1Life > 0 && player2Life  <= 0  ) {
    output +=`${player1} est le vainqueur! et ${player2} est perdant`;

} else if(player1Life <= 0 && player2Life > 0 )  {
    output +=`${player1} désolé Pikachu, perdu :(  ${player2} a gagné, la team rocket a encore gagné`;

} else {
    output +=`${player1} et l'${player2} êtes à  egalités, quel combat !!`;    

}  

document.getElementById(`battle`).innerHTML=output;

}