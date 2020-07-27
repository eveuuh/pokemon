// definition des constantes du jeu // 

const player1 = 'Pikachu';
const player2 = 'Miaouss';
let player1Life = 100;
let player2Life = 100;


// 


console.clear();
console.log('/////////////////////////////////////');
console.log('  C\'est l\'heure du dueeeeeeeeel !');
console.log(`/////////////////////////////////////`);
console.log('');

// programme defini par une boucle avec des conditions //


while (player1Life > 0 && player2Life > 0) {
    const puissanceAttaque1 = Math.floor(Math.random() * 50) ;
    const puissanceAttaque2 = Math.floor(Math.random() * 50);

    // constantes pour 90% de reussites de l'attaque et 10% echouée //

    const attaquereussie1 = Math.floor(Math.random() * 100);
    const attaquereussie2 =  Math.floor(Math.random() * 100);
  

    console.log('');
    console.log(`${player1} (${player1Life})  -  ${player2} (${player2Life})`);

// bloc d'attaques   //

    if (attaquereussie1 <10 ) {
        console.log('attaque éclair a échouée');

    }else { console.log(`${player1} attaque et enlève ${puissanceAttaque1} points de vie`);
            player2Life = player2Life - puissanceAttaque1;
    }


    if (attaquereussie2 <10 ) {
        console.log('son attaque a échouée');

    }else { console.log(`${player2} attaque et enlève ${puissanceAttaque2} points de vie`);
    player1Life = player1Life - puissanceAttaque2;
    }
    


// ajout de potion   //
if (player1Life < 20) {
    let potion1 = player1Life +30 + Math.floor(Math.random() * 60 );
    player1Life = potion1;
    console.log(`${player1} Vous avez bu une potion et gagné  ${potion1} Pv vous avez : ${player1Life} points `);
    
}
if (player2Life < 20){
    let potion2 = player2Life + 30+ Math.floor(Math.random() * 60 );
    player2Life = potion2;
    console.log(`${player2} a bu une potion et gagné ${potion2}PV vous avez : ${player2Life} points `);

}
}

//affiche le resultat du programme// 

console.log("/////////////////////////////////////");
console.log("Le Combat est terminé!");

if (player1Life > 0 && player2Life  <= 0  ) {
    console.log(`${player1} est le vainqueur!` , `et ${player2} est perdant`);

} else if(player1Life <= 0 && player2Life > 0 )  {
    console.log(`${player1} désolé Pikachu, perdu :( ` , ` ${player2} a gagné, la team rocket a encore gagné`);

} else {
    console.log(`${player1} et l'${player2} êtes à  egalités, quel combat !!`);    

}  
