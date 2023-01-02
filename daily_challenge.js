/*****
    * Prompt the user for several words (separated by commas).
    *Put the words into an array.
    *Console.log the words one per line, in a rectangular frame as seen below.
    *Check out the Hints and Requirements below.
    *
    */


  
let sentence = prompt("enter your sentence (separated by commas)")
 if (typeof sentence === 'string') {
    //const arr = sentence.split(',');
   // console.log(arr);
 
//Identification du separateur

let SentencesTableSeparated = sentence.split(",")
//Tri du tableau
let BigSentence = SentencesTableSeparated.sort()
//console.log(BigSentence)
//Recuperation de la chaine la plus long.
let LastSentence = BigSentence[BigSentence.length - 1]
//console.log(LastSentence)
//console.log(LastSentence.length)

//La variable pour ajouter les  etoiles 
let star = ""
//La variable pour ajouter la premiere ligne d'etoile
let line = "";
for (let i = 1; i <= LastSentence.length + 6; i++) {
    line = line + "*";

}

//Affichage de la premiere ligne d'etoile
console.log(line)

//Une boucle pour ajouter les etoile au debut et a la fin des mots
for (let i = 0; i <= LastSentence.length + 5; i++) {

    //Ajout des etoiles de la derniere ligne
    star = star + "*";

    if (i <= BigSentence.length - 1) {

        //La taille des etoiles de fin de mot
        let result = LastSentence.length + 2 - BigSentence[i].length
        //console.log(result)
        
        let space  =" "
        
        console.log("* " + BigSentence[i] + space.repeat(result) + " *")

    }

}

//Affichage de la derniere  ligne d'etoile
console.log(star)
} else {
    console.log('str is not a string');
  }